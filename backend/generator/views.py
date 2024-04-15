from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Image
from django.contrib.auth import get_user_model
import requests
import matplotlib.pyplot as plt
import numpy as np
from core import settings
import PIL
from io import BytesIO

UserAccount = get_user_model()
NGROK_URL = "https://5d69-35-230-107-40.ngrok-free.app/"


@api_view(['POST'])
def genImage(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        id = int(data['id'])
        prompt = data['prompt']
        model = int(data['model'])
        account = UserAccount.objects.filter(id = id).first()
        print(prompt, model)
        if model == 0 or model == 1:
            url = NGROK_URL
            data = {'prompt': prompt}
            response = requests.post(url, json=data)
            response_data = response.json()
            response_data = np.array(response_data['data'], dtype=np.uint8)
            pil_image = PIL.Image.fromarray(response_data)
            image_io = BytesIO()
            pil_image.save(image_io, format='PNG')
            image_io.seek(0)
            img = Image(owner=account, promt=prompt)
            img.image.save(f"{prompt}.png", image_io)
            return Response("Added sucessfully")

        print(prompt, model)
        return Response("Image generated successfully", status=200)


@api_view(['POST'])
def genImageApi(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        prompt = data['prompt']
        data = {'prompt': prompt}
        response = requests.post(NGROK_URL, json=data)
        response_data = response.json()
        response_data = np.array(response_data['data'], dtype=np.uint8)
        plt.imsave('test.png', response_data)
        return JsonResponse(data=response.json(),safe = False)


