from django.urls import path, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static

# All these routes point to the same view which is index.html
# because they are being handled by React. The routes are also in mySite/src/components/App.js
urlpatterns = [
    path('', views.index),
    re_path(r'home/?$', views.index),
    re_path(r'about/?$', views.index),
    re_path(r'experience/?$', views.index),
    re_path(r'my-work/?$', views.index),
    re_path(r'skills/?$', views.index),
    re_path(r'contact/?$', views.index),
    re_path(r'page-not-found-404/?$', views.index),
    path('ajax/send_email/', views.send_email, name='send_email'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
