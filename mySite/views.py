from django.shortcuts import render


# Index View. The Index html is controlled with react
def index(request):
    return render(request, 'mySite/minHTML/index.html')


