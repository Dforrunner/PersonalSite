from django.contrib import admin
from .models import Sidebar, Home, About, ResponsibilityList, Experience, Skills, Projects, Contact, SkillNames, GoogleMap


class ProjectsAdmin(admin.ModelAdmin):
    filter_horizontal = ('tools_used', )


class SkillsAdmin(admin.ModelAdmin):
    filter_horizontal = ('skill_names', )


class ExperienceAdmin(admin.ModelAdmin):
    filter_horizontal = ('responsibilities', )


# Register your models here.
admin.site.register(Sidebar)
admin.site.register(Contact)
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(ResponsibilityList)
admin.site.register(Skills, SkillsAdmin)
admin.site.register(SkillNames)
admin.site.register(Projects, ProjectsAdmin)
admin.site.register(GoogleMap)
