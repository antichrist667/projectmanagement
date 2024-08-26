package server

import (
    "context"
    "suggestions_service/proto"
    "suggestions_service/repository"
    "suggestions_service/models"

    "google.golang.org/protobuf/types/known/timestamppb"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type SuggestionsServer struct {
    repo *repository.SuggestionsRepository
    proto.UnimplementedSuggestionsServiceServer
}

func NewSuggestionsServer(repo *repository.SuggestionsRepository) *SuggestionsServer {
    return &SuggestionsServer{repo: repo}
}

func (s *SuggestionsServer) CreateSuggestion(ctx context.Context, req *proto.Suggestion) (*proto.SuggestionId, error) {
    suggestion := &models.Suggestion{
        Suggestion: req.Suggestion,
    }
    suggestion, err := s.repo.CreateSuggestion(ctx, suggestion)
    if err != nil {
        return nil, err
    }
    return &proto.SuggestionId{Id: suggestion.ID.Hex()}, nil
}

func (s *SuggestionsServer) GetSuggestion(ctx context.Context, req *proto.SuggestionId) (*proto.Suggestion, error) {
    id, err := primitive.ObjectIDFromHex(req.Id)
    if err != nil {
        return nil, err
    }
    suggestion, err := s.repo.GetSuggestion(ctx, id)
    if err != nil {
        return nil, err
    }
    return &proto.Suggestion{
        Id:        suggestion.ID.Hex(),
        Suggestion: suggestion.Suggestion,
        Timestamp:  timestamppb.New(suggestion.Timestamp),
    }, nil
}

func (s *SuggestionsServer) UpdateSuggestion(ctx context.Context, req *proto.Suggestion) (*proto.Suggestion, error) {
    id, err := primitive.ObjectIDFromHex(req.Id)
    if err != nil {
        return nil, err
    }
    suggestion := &models.Suggestion{
        ID:        id,
        Suggestion: req.Suggestion,
    }
    suggestion, err = s.repo.UpdateSuggestion(ctx, suggestion)
    if err != nil {
        return nil, err
    }
    return req, nil
}

func (s *SuggestionsServer) DeleteSuggestion(ctx context.Context, req *proto.SuggestionId) (*proto.Empty, error) {
    id, err := primitive.ObjectIDFromHex(req.Id)
    if err != nil {
        return nil, err
    }
    err = s.repo.DeleteSuggestion(ctx, id)
    if err != nil {
        return nil, err
    }
    return &proto.Empty{}, nil
}
