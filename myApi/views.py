from rest_framework import viewsets
from .serializers import SidebarSerializer, HomeSerializer, AboutSerializer, ExperienceSerializer, \
    SkillsSerializer, ProjectsSerializer, ContactSerializer, SkillNamesSerializer, GoogleMapSerializer
from .models import Sidebar, Home, About, Experience, Skills, SkillNames, Projects, Contact, GoogleMap


class SidebarViewSet(viewsets.ModelViewSet):
    queryset = Sidebar.objects.all()
    serializer_class = SidebarSerializer


class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class SkillsViewSet(viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class SkillNamesViewSet(viewsets.ModelViewSet):
    queryset = SkillNames.objects.all()
    serializer_class = SkillNamesSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class GoogleMapSerializerViewSet(viewsets.ModelViewSet):
    queryset = GoogleMap.objects.all()
    serializer_class = GoogleMapSerializer
