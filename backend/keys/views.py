from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user_authenticate.models import UserAccount
from .models import API_KEY
import string
import random
def genKey():
    chars = string.ascii_lowercase + string.digits + '!@$%*'
    return ''.join(random.choice(chars) for _ in range(64))
    
    

@api_view(['POST'])
def gen_key(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        id = data['id']
        user = UserAccount.objects.filter(id = id).first()
        api_key = API_KEY(owner = user, key = genKey())
        api_key.save()
        return Response("Successfully added")
    
@api_view(['GET'])
def check_key(request, *args, **kwargs):
    if request.method == "GET":
        key = request.GET.get('key')
        api_key = API_KEY.objects.filter(key = key).first()
        if api_key:
            return Response(data={"Message": "The key is valid"}, status=200)
        else:
            return Response(data={"Message": "The key is invalid"}, status=404)
    
@api_view(['GET'])
def key_credentials(request, *args, **kwargs):
    if request.method == "GET":
        id = request.GET.get('id')
        user = UserAccount.objects.filter(id = id).first()
        api_key = API_KEY.objects.filter(owner = user).first()
        if api_key:
            return Response(data = {"Key": api_key.key}, status=200)
        else:
            return Response(data={"Key": ''}, status=404)