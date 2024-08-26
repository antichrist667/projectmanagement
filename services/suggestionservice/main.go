package main

import (
    "context"
    "log"
    "net"
    "suggestions_service/proto"
    "suggestions_service/repository"
    "suggestions_service/server"

    "google.golang.org/grpc"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/connect"
)

func main() {
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
    client, err := mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    db := client.Database("suggestionsdb")
    repo := repository.NewSuggestionsRepository(db)
    srv := server.NewSuggestionsServer(repo)

    grpcServer := grpc.NewServer()
    proto.RegisterSuggestionsServiceServer(grpcServer, srv)

    lis, err := net.Listen("tcp", ":50051")
    if err != nil {
        log.Fatalf("failed to listen: %v", err)
    }

    log.Println("gRPC server is running on port 50051")
    if err := grpcServer.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}
