from rest_framework import viewsets
from .serializers import SidebarSerializer, HomeSerializer, AboutSerializer, EducationSerializer, \
    SkillsSerializer, ProjectsSerializer, ContactSerializer
from .models import Sidebar, Home, About, Education, Skills, Projects, Contact


class SidebarViewSet(viewsets.ModelViewSet):
    queryset = Sidebar.objects.all()
    serializer_class = SidebarSerializer


class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class SkillsViewSet(viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

