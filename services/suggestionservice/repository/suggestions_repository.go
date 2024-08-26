package repository

import (
    "context"
    "time"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "suggestions_service/models"
)

type SuggestionsRepository struct {
    collection *mongo.Collection
}

func NewSuggestionsRepository(db *mongo.Database) *SuggestionsRepository {
    return &SuggestionsRepository{
        collection: db.Collection("suggestions"),
    }
}

func (r *SuggestionsRepository) CreateSuggestion(ctx context.Context, suggestion *models.Suggestion) (*models.Suggestion, error) {
    suggestion.Timestamp = time.Now()
    result, err := r.collection.InsertOne(ctx, suggestion)
    if err != nil {
        return nil, err
    }
    suggestion.ID = result.InsertedID.(primitive.ObjectID)
    return suggestion, nil
}

func (r *SuggestionsRepository) GetSuggestion(ctx context.Context, id primitive.ObjectID) (*models.Suggestion, error) {
    var suggestion models.Suggestion
    err := r.collection.FindOne(ctx, bson.M{"_id": id}).Decode(&suggestion)
    if err != nil {
        return nil, err
    }
    return &suggestion, nil
}

func (r *SuggestionsRepository) UpdateSuggestion(ctx context.Context, suggestion *models.Suggestion) (*models.Suggestion, error) {
    filter := bson.M{"_id": suggestion.ID}
    update := bson.M{
        "$set": bson.M{
            "suggestion": suggestion.Suggestion,
            "timestamp":  time.Now(),
        },
    }
    _, err := r.collection.UpdateOne(ctx, filter, update)
    if err != nil {
        return nil, err
    }
    return suggestion, nil
}

func (r *SuggestionsRepository) DeleteSuggestion(ctx context.Context, id primitive.ObjectID) error {
    _, err := r.collection.DeleteOne(ctx, bson.M{"_id": id})
    return err
}
