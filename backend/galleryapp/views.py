from django.http import HttpResponse
from rest_framework.decorators import api_view
from django.core.files import File
from io import BytesIO
from PIL import Image
import requests
from .models import GalleryImage
from django.core.files.base import ContentFile
from rest_framework import status
from rest_framework.response import Response
import base64

API_URL = "https://thispersondoesnotexist.com"


@api_view(['GET'])
def preview_image(request, index):
    gallery_image, _ = GalleryImage.objects.get_or_create(index=index)

    # No image - fetch from API and resize
    if not gallery_image.image:
        response = requests.get(API_URL, stream=True)
        img = Image.open(response.raw)
        img = img.resize((200, 200))
        img_io = BytesIO()
        img.save(img_io, format='JPEG')
        img_io.seek(0)
        gallery_image.image.save(f'{index}.jpg', File(img_io), save=True)

    return HttpResponse(gallery_image.image, content_type='image/jpeg')


@api_view(['PUT'])
def set_image(request, index):
    try:
        image_data = request.data.get('image', None)

        if not image_data:
            return Response({'error': 'No image provided.'}, status=status.HTTP_400_BAD_REQUEST)

        format, imgstr = image_data.split(';base64,')
        ext = format.split('/')[-1]
        decoded_img = base64.b64decode(imgstr)

        gallery_image = GalleryImage.objects.get(index=index)
        gallery_image.image.save(f'{index}.{ext}', ContentFile(decoded_img), save=True)

        return Response({'success': 'Image updated successfully!'}, status=status.HTTP_200_OK)

    except GalleryImage.DoesNotExist:
        return Response({'error': 'Image not found.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
