from django.contrib import admin
from .models import Sidebar, Home, About, Education, Skills, Projects, Contact


class ProjectsAdmin(admin.ModelAdmin):
    filter_horizontal = ('tools_used', )


# Register your models here.
admin.site.register(Sidebar)
admin.site.register(Contact)
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Education)
admin.site.register(Skills)
admin.site.register(Projects, ProjectsAdmin)
