import boto3

from app.core.settings import settings


class AWSClients:
    """
    Singleton AWS clients.
    """

    def __init__(self):

        self.s3 = boto3.client(
            "s3",
            region_name=settings.AWS_REGION,
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        self.sns = boto3.client(
            "sns",
            region_name=settings.AWS_REGION,
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        self.dynamodb = boto3.resource(
            "dynamodb",
            region_name=settings.AWS_REGION,
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )


aws = AWSClients()

s3_client = aws.s3
sns_client = aws.sns
dynamodb_resource = aws.dynamodb