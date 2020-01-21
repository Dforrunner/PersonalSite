from rest_framework import serializers
from .models import Logo, Home, About, Education, Skills, Projects, Contact, SocialLinks


class LogoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Logo
        fields = ('logo', 'favicon')


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
                  'start_month',
                  'start_year',
                  'end_month',
                  'end_year')


class SkillsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Skills
        fields = ('skill_name', 'category', 'skill_logo')


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
        fields = ('phone', 'email')


class SocialLinksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SocialLinks
        fields = ('instagram',
                  'linkedin',
                  'github',
                  'facebook',
                  'youtube',
                  'medium',
                  'slack',
                  'CodePen',
                  'stack_overflow')
