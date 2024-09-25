from django.db import models

class GalleryImage(models.Model):
    index = models.PositiveIntegerField(unique=True)
    image = models.ImageField(upload_to='gallery_images/')

    def __str__(self):
        return f"Image {self.index}"
