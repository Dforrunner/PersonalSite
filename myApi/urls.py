from django.urls import include, path
from rest_framework import routers
from . import views

# Initializing router
router = routers.DefaultRouter()

# API routers
router.register('sidebar', views.SidebarViewSet)
router.register('home-pg', views.HomeViewSet)
router.register('about-pg', views.AboutViewSet)
router.register('skills-pg', views.SkillsViewSet)
router.register('skill-names', views.SkillNamesViewSet)
router.register('projects-pg', views.ProjectsViewSet)
router.register('contact-pg', views.ContactViewSet)
router.register('google-map', views.GoogleMapSerializerViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

