from django.contrib import admin
from .models import Sidebar, Home, About, Skills, Projects, Contact, SkillNames


class ProjectsAdmin(admin.ModelAdmin):
    filter_horizontal = ('tools_used', )


class SkillsAdmin(admin.ModelAdmin):
    filter_horizontal = ('skill_names', )


# Register your models here.
admin.site.register(Sidebar)
admin.site.register(Contact)
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Skills, SkillsAdmin)
admin.site.register(SkillNames)
admin.site.register(Projects, ProjectsAdmin)
