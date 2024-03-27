from django.shortcuts import render
from rest_framework.decorators import api_view
from . import models
import json
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password

@api_view(['POST', 'GET'])
def isUser(request, *args, **kwargs):
    body = request.body
    data = json.loads(body)
    email = data['email']
    password = data['password']
    try:
        user = models.UserAccount.objects.get(email=email)
    except models.UserAccount.DoesNotExist:
        return Response(data={"message": "This account doesn't exist."}, status=404)
    if check_password(password, user.password):
        return Response(data = {"id": str(user.id)}, status=200)
    else:
        return Response(data = {"message": "Wrong password."}, status=404)