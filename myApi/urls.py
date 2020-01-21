from django.urls import include, path
from rest_framework import routers
from . import views
router = routers.DefaultRouter()

router.register('logo', views.LogoViewSet)
router.register('home', views.HomeViewSet)
router.register('about', views.AboutViewSet)
router.register('education', views.EducationViewSet)
router.register('skills', views.SkillsViewSet)
router.register('projects', views.ProjectsViewSet)
router.register('contact', views.ContactViewSet)
router.register('social-media-links', views.SocialLinksViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

