from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('contact/', views.contact, name='contact'),
    path('ajax/send_email/', views.send_email, name='send_email')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
