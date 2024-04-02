import time
import keras_cv
import keras
import matplotlib.pyplot as plt

def save_images(images):
    fig = plt.figure(figsize=(20, 20))
    for i in range(len(images)):
        ax = fig.add_subplot(1, len(images), i + 1)
        ax.imshow(images[i])
        ax.axis("off")
    return fig

    
def load_model():
    model = keras_cv.models.StableDiffusion(
    img_width=512, img_height=512, jit_compile=False)
    return model



def make_a_prediction_and_save(prompt, model):
    images = model.text_to_image(prompt, batch_size=1)
    fig = save_images(images)
    return fig
    

