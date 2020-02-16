from django.core.mail import send_mail, BadHeaderError
from django.http import JsonResponse
from myApi.forms import ContactForm
from django.conf import settings
import os
import json


# Sending email
def send_email_method(request):
    # Validating request type and form
    data = {}
    if request.method == 'POST':
        data = json.loads(request.body)
        form = ContactForm(data)
        if form.is_valid():
            # Getting form field inputs from the request
            name = data['name']
            subject = data['subject']
            message = data['message']
            from_email = data['email']
            # Getting the contact email from the database
            to_email = settings.EMAIL_HOST_USER
            # Constructing the email body
            email_body = f"Name: {name}\n" \
                         f"Email: {from_email}\n" \
                         f"Messsage: \n\n {message}"

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
                        'errors': "",
                        'msg_color': 'success'}
        else:
            print(json.dumps(form.errors))
            response = {'success': False,
                        'message': "Couldn't send message for the following error(s):",
                        'errors': json.dumps(form.errors),
                        'msg_color': 'error'}
        return JsonResponse(response)
    return JsonResponse({'success': True, 'data': data})
