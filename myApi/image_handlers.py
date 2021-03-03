import webp
from PIL import Image
import os
from cloudinary import uploader as cloudinary_uploader


# Helper function that take the basename of a path and changes its extension
# Then concatenates it back together with the dirname and returns it
def change_extension_of_path(path, extension):
    # Getting the filename from the path aka the last path
    filename = os.path.basename(path)
    # Getting the base name so not the extension
    base = os.path.splitext(filename)[0]
    # Adding new extension
    new_ext = base + extension
    return os.path.join(os.path.dirname(path), new_ext)


# Changing the extension of a given file that is not attached to a path
def change_extension(filename, extension):
    # Getting the base name so not the extension
    base = os.path.splitext(str(filename))[0]
    # Adding new extension
    new_ext = base + extension
    return new_ext


# Helper that simply returns the file extension
def get_extension(filename):
    return os.path.splitext(filename)[1]


# Helper functions that check if the height or the width have been set to auto
# If so the image is resized according to it's aspect radio
# Else if new_width and new_height are set to hard numbers, then the image is resized according to that
# If either values are set to original then return it's original size
def resize_img(img, new_width, new_height):
    org_width, org_height = img.size
    if new_width == 'auto':
        new_width = new_height / (org_height / org_width)
    if new_height == 'auto':
        new_height = (org_height / org_width) * new_width
    if new_width == 'original':
        new_width = org_width
    if new_height == 'original':
        new_height = org_height

    return img.resize((int(new_width), int(new_height)))


# Save file to Cloudinary
def save_to_cloudinary(file):
    return cloudinary_uploader.upload(
        file,
        overwrite=True,
        resource_type="image")


# Helper function that resizes images and converts them to webp using libwebp
def to_webp_optimized(field, width, height):
    # Using PIL to open the image and then resizing it
    img = Image.open(field)
    resized_img = resize_img(img, width, height)
    # Getting the file path we want to save the webp image to and setting the right extension
    file_path = change_extension_of_path(path=field.path, extension=".webp")
    # Using webp module to convert and save the image
    webp.save_image(resized_img, file_path, quality=70)
    # Save image to cloudinary and return the url
    return save_to_cloudinary(file_path)['secure_url']


# Optimizing images using PIL
def to_jpg_optimized(field, width, height):
    # Using PIL to open the image and then resizing it
    img = Image.open(field)
    resized_img = resize_img(img, width, height)

    # Initializing final image that will be saved. If the file format is JPG then
    # there is no need to convert it so the final image will be the resized image
    # otherwise if it's not JPG format the final image will be the image that was converted to JPG
    final_img = resized_img
    # If image format is not JPG convert to jpeg so that we can use lossy compression
    if img.format != 'JPG':
        # Converting Image to JPG
        final_img = resized_img.convert('RGB')
    # Getting the file path we want to save the jpg image to and setting the right extension
    file_path = change_extension_of_path(path=field.path, extension=".jpg")
    # Optimize and save image
    final_img.save(fp=file_path, optimize=True, quality=70)
    # Save image to cloudinary and return the url
    return save_to_cloudinary(file_path)['secure_url']
