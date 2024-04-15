from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user_authenticate.models import UserAccount
from generator.models import Image
import mimetypes
from base64 import b64encode
# Create your views here.

def getPhoto(id):
    image = Image.objects.filter(id = id).first()
    content_type, _ = mimetypes.guess_type(image.image.name)
    with image.image.open('rb') as image_file:
        encoded_string = b64encode(image_file.read()).decode('utf-8')
        data_uri = f"data:{content_type};base64,{encoded_string}"
        return data_uri

@api_view(['GET'])
def info(request ,*args, **kwargs):
    if request.method == "GET":
        id = request.GET.get('id')
        user = UserAccount.objects.filter(id = id).first()
        gen_images = Image.objects.filter(owner = user).all()
        images = []
        for image in gen_images:
            dict = {
                'prompt': image.promt,
                'image': getPhoto(image.id)
            }
            images.append(dict)
        images.reverse()
        return Response(data={"data": images}, status=200)
