package models

import (
    "go.mongodb.org/mongo-driver/bson/primitive"
    "time"
)

type Suggestion struct {
    ID        primitive.ObjectID `bson:"_id,omitempty"`
    Suggestion string            `bson:"suggestion"`
    Timestamp  time.Time         `bson:"timestamp"`
}
