from django.contrib import admin
from .models import Logo, Home, About, Education, Skills, Projects, Contact, SocialLinks


# Register your models here.
admin.site.register(Logo)
admin.site.register(Contact)
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Education)
admin.site.register(Skills)
admin.site.register(Projects)
admin.site.register(SocialLinks)
