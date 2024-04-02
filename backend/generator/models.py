from django.db import models
from django.contrib.auth import get_user_model

UserAccount = get_user_model()


def image_upload_path(owner, filename):
    return f"user/{owner.id}/generated_image/{filename}"

class Image(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(UserAccount,  on_delete=models.CASCADE)
    image = models.ImageField(upload_to = image_upload_path, default='default.png', null=False)
    promt = models.CharField(max_length = 256)