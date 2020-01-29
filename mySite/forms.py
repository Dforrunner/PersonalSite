from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=64, widget=forms.TextInput(), required=True)
    email = forms.EmailField(max_length=128, widget=forms.TextInput(), required=True)
    subject = forms.CharField(max_length=255, widget=forms.TextInput(), required=True)
    message = forms.CharField(widget=forms.Textarea(), required=True)
