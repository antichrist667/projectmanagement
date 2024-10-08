import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from models import Comment as CommentModel
from config import SessionLocal

class CommentType(SQLAlchemyObjectType):
    class Meta:
        model = CommentModel

class Query(graphene.ObjectType):
    comment = graphene.Field(CommentType, id=graphene.Int(required=True))
    all_comments = graphene.List(CommentType)

    def resolve_comment(self, info, id):
        return SessionLocal.query(CommentModel).filter(CommentModel.id == id).first()

    def resolve_all_comments(self, info):
        return SessionLocal.query(CommentModel).all()

class CreateComment(graphene.Mutation):
    class Arguments:
        idProyect = graphene.Int(required=True)
        content = graphene.String(required=True)

    comment = graphene.Field(CommentType)

    def mutate(self, info, idProyect, content):
        comment = CommentModel(id_proyect=idProyect, content=content)
        SessionLocal.add(comment)
        SessionLocal.commit()  
        SessionLocal.refresh(comment)  
        return CreateComment(comment=comment)

class UpdateComment(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        content = graphene.String()

    comment = graphene.Field(CommentType)

    def mutate(self, info, id, content=None):
        comment = SessionLocal.query(CommentModel).filter(CommentModel.id == id).first()
        if comment:
            if content:
                comment.content = content
            SessionLocal.commit()
            SessionLocal.refresh(comment) 
        return UpdateComment(comment=comment)

class DeleteComment(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)

    success = graphene.Boolean()

    def mutate(self, info, id):
        comment = SessionLocal.query(CommentModel).filter(CommentModel.id == id).first()
        if comment:
            SessionLocal.delete(comment)
            SessionLocal.commit()
            return DeleteComment(success=True)
        return DeleteComment(success=False)

class Mutation(graphene.ObjectType):
    create_comment = CreateComment.Field()
    update_comment = UpdateComment.Field()
    delete_comment = DeleteComment.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
