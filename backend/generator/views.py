from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from django.contrib.auth import get_user_model

from .sd import load_model, save_images, make_a_prediction_and_save
TF_ENABLE_ONEDNN_OPTS=0
sd_model = load_model()
print("Model Loaded")

UserAccount = get_user_model()


def image_upload_path(owner, filename):
    return f"user/{owner.id}/generated_image/{filename}"

@api_view(['POST'])
def genImage(request, *args, **kwargs):
    if request.method == "POST":
        body = request.body
        data = json.loads(body)
        user_id = data['user_id']
        prompt = data['prompt']
        model = int(data['model'])
        print(prompt, model)
        if model == 0:
            fig = make_a_prediction_and_save(prompt=prompt, model=sd_model)
            filename = prompt
            user = UserAccount.objects.filter(id = user_id).first()
            image = Image(owner = user, prompt = prompt, image = fig)
            image.save()
        print(prompt, model)
        return Response("Image generated successfully", status=200)
