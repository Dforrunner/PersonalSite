from rest_framework import viewsets, permissions
from .serializers import ContactSerializer
from .models import Contact


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

