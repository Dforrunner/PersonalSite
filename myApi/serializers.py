from rest_framework import serializers
from .models import Sidebar, Home, About, Education, Skills, Projects, Contact


class SidebarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sidebar
        fields = ('logo',
                  'favicon',
                  'instagram',
                  'linkedin',
                  'github',
                  'facebook',
                  'youtube',
                  'medium',
                  'slack',
                  'CodePen',
                  'stack_overflow')


class HomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Home
        fields = ('name', 'intro')


class AboutSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = About
        fields = ('about', 'profile_img')


class EducationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Education
        fields = ('school_name',
                  'major',
                  'minor',
                  'grad_month',
                  'grad_year')


class SkillsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Skills
        fields = ('skill_name', 'category')


class ProjectsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Projects
        fields = ('title',
                  'description',
                  'tools_used',
                  'desktop_img',
                  'mobile_img',
                  'video')


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('email', )