from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import JsonResponse, Http404
from .forms import ContactForm
# TODO: make this api request
from myApi.models import Contact


# Create your views here.
def index(request):
    return render(request, 'mySite/index.html')


def about(request):
    return render(request, 'mySite/about.html')


def experience(request):
    return render(request, 'mySite/experience.html')


def my_work(request):
    return render(request, 'mySite/my_work.html')


def skills(request):
    return render(request, 'mySite/skills.html')


def contact(request):
    # Initializing the form
    form = ContactForm()
    # Context that is sent to the template
    context = {
        'form': form,
    }
    return render(request, 'mySite/contact.html', context)


# Sending email
def send_email(request):
    # Validating request type and form
    if request.is_ajax() and request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Getting form field inputs from the request
            name = request.POST.get('name')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            from_email = request.POST.get('email')
            # Getting the contact email from the database
            to_email = Contact.objects.values_list('email').first()[0]
            # Constructing the email body
            email_body = f"İsim: {name}\n" \
                         f"Gönderen İmeil: {from_email}\n" \
                         f"Mesaj: \n\n {message}"

            # Sending email + error handling
            try:
                send_mail(
                    subject,
                    email_body,
                    from_email,
                    [to_email],
                    fail_silently=False,
                )
            except BadHeaderError:
                return JsonResponse({'success': False,
                                     'message': "Couldn't send message for the following error(s):",
                                     'errors': 'Invalid header found.',
                                     'msg_color': 'error'})
            except Exception as e:
                print(e)
                return JsonResponse({'success': False,
                                     'message': "Couldn't send message for the following error(s):",
                                     'errors': 'Email server down. Please try again later or give us a call.',
                                     'msg_color': 'error'})

            response = {'success': True,
                        'message': 'Successfully Sent!',
                        'msg_color': 'success'}
        else:
            print(form.errors)
            response = {'success': False,
                        'message': "Couldn't send message for the following error(s):",
                        'errors': str(form.errors),
                        'msg_color': 'error'}
        return JsonResponse(response)
    else:
        return Http404

