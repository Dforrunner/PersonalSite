from rest_framework import viewsets, permissions
from .serializers import LogoSerializer, HomeSerializer, AboutSerializer, EducationSerializer, \
    SkillsSerializer, ProjectsSerializer, ContactSerializer, SocialLinksSerializer
from .models import Logo, Home, About, Education, Skills, Projects, Contact, SocialLinks


class LogoViewSet(viewsets.ModelViewSet):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer


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


class SocialLinksViewSet(viewsets.ModelViewSet):
    queryset = SocialLinks.objects.all()
    serializer_class = SocialLinksSerializer
