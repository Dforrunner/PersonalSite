from django.urls import include, path
from rest_framework import routers
from .views import api_views, send_email, lazy_loaded_views
from django.views.generic import RedirectView

# Initializing router
router = routers.DefaultRouter()

# API routers
router.register('sidebar', api_views.SidebarViewSet)
router.register('home-pg', api_views.HomeViewSet)
router.register('about-pg', api_views.AboutViewSet)
router.register('experience-list', api_views.ExperienceViewSet)
router.register('skills-pg', api_views.SkillsViewSet)
router.register('skill-names', api_views.SkillNamesViewSet)
router.register('projects-pg', api_views.ProjectsViewSet)
router.register('contact-pg', api_views.ContactViewSet)
router.register('google-map', api_views.GoogleMapSerializerViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api', RedirectView.as_view(url="/api/")),
    path('lazy-load-projects/', lazy_loaded_views.ProjectsLazyLoadViewSet.as_view({'get': 'list'}), name='ld-projects'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('ajax/send_email', send_email.send_email_method, name='send_email'),
]
