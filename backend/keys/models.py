from django.db import models
from user_authenticate.models import UserAccount
# Create your models here.
class API_KEY(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(UserAccount, on_delete=models.CASCADE, unique = True)
    key = models.CharField(max_length = 256, unique = True, null = False)