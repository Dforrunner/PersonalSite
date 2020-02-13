from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mySite.urls')),
    path('', include('myApi.urls')),

    #  catching path that are not included in our patterns and
    #  redirecting to custom 404 page that is handled by React.
    #  This is placed as the last path because otherwise it'll
    #  catch api routes and point to 404 page, which we don't want
    re_path('^(?:.*)/?$',  RedirectView.as_view(url="/page-not-found-404")),
]
