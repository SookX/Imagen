from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from django.contrib.auth import get_user_model
import requests
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image


UserAccount = get_user_model()


@api_view(['POST'])
def genImage(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        prompt = data['prompt']
        model = int(data['model'])
        print(prompt, model)
        if model == 0:
            url = "https://197f-34-125-207-170.ngrok-free.app/"

            data = {'prompt': prompt}

            # Send the POST request
            response = requests.post(url, json=data)

            response_data = response.json()
            response_data = np.array(response_data['data'], dtype=np.uint8)
            
            print("Image started saving")
            plt.imshow(response_data)
            plt.imsave("saved_image.png", response_data)

        print(prompt, model)
        return Response("Image generated successfully", status=200)
