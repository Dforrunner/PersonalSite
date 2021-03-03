from rest_framework import serializers
from .models import Sidebar, Home, About, Experience, ResponsibilityList,  Skills, Projects, Contact, SkillNames, GoogleMap


# Serializer classes
class SidebarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sidebar
        fields = ('logo_jpg',
                  'logo_webp',
                  'avatar_jpg',
                  'avatar_webp',
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
        fields = ('p_title',
                  'p1',
                  'p2',
                  'p3',
                  'profile_img_jpg',
                  'profile_img_webp'
                  )


class ResponsibilityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponsibilityList
        fields = ('pk', 'responsibility')


class ExperienceSerializer(serializers.ModelSerializer):
    responsibilities = ResponsibilityListSerializer(many=True, read_only=True)
    start_month = serializers.CharField(source='get_start_month_display')
    start_year = serializers.CharField(source='get_start_year_display')
    end_month = serializers.CharField(source='get_end_month_display')
    end_year = serializers.CharField(source='get_end_year_display')

    class Meta:
        model = Experience
        fields = ('pk',
                  'title',
                  'company_name',
                  'start_month',
                  'start_year',
                  'end_month',
                  'end_year',
                  'responsibilities')


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
        fields = ('pk',
                  'title',
                  'description',
                  'tools_used',
                  'desktop_img_jpg',
                  'desktop_img_webp',
                  'tablet_img_jpg',
                  'tablet_img_webp',
                  'mobile_img_jpg',
                  'mobile_img_webp',
                  'github',
                  'site_link',
                  'video')


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('email', )


class GoogleMapSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GoogleMap
        fields = ('latitude', 'longitude', "marker")
