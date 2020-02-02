from rest_framework import serializers
from .models import Sidebar, Home, About, Skills, Projects, Contact, SkillNames, GoogleMap


# Serializer classes


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
        fields = ('p_title', 'p1', 'p2', 'p3', 'profile_img')


class SkillNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillNames
        fields = ("pk", "skill_name", )


class SkillsSerializer(serializers.ModelSerializer):
    skill_names = SkillNamesSerializer(many=True)

    class Meta:
        model = Skills
        fields = ('pk', 'skill_category', "skill_names")


class ProjectsSerializer(serializers.ModelSerializer):
    tools_used = SkillNamesSerializer(many=True, read_only=True)

    class Meta:
        model = Projects
        fields = ('title',
                  'description',
                  'tools_used',
                  'desktop_img',
                  'tablet_img',
                  'mobile_img',
                  'video')


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('email', )


class GoogleMapSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GoogleMap
        fields = ('latitude', 'longitude', "marker")
