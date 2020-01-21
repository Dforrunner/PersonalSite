from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', views.about, name='about'),
    path('experience/', views.experience, name='experience'),
    path('my-work/', views.my_work, name='my_work'),
    path('skills/', views.skills, name='skills'),
    path('contact/', views.contact, name='contact'),
    path('ajax/send_email/', views.send_email, name='send_email')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
