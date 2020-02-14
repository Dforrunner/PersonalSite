from rest_framework import viewsets
from rest_framework.response import Response
from myApi.models import Projects
from myApi.serializers import ProjectsSerializer


"""
    These are view that get loaded based on a specified number. Meaning all the objects 
    don't get loaded at the same time. This provides a lazy load feature.
"""


def lazy_filter(request):
    limit = request.GET.get('limit')
    offset = request.GET.get('offset')
    return Projects.objects.all()[int(offset):int(offset) + int(limit)]


def is_there_more(request):
    offset = request.GET.get('offset')
    if int(offset) > Projects.objects.all().count():
        return False
    return True


class ProjectsLazyLoadViewSet(viewsets.ViewSet):
    serializer_class = ProjectsSerializer

    def get_queryset(self):
        queryset = lazy_filter(self.request)
        return queryset

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        serializer = self.serializer_class(qs, many=True)
        return Response({
            "project_list": serializer.data,
            "has_more": is_there_more(request)
        })