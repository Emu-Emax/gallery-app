from django.contrib import admin
from .models import GalleryImage

# Register the GalleryImage model
@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('index', 'image')  # Choose fields to display in the admin list view
