from django.db import models


# Create your models here.
class Contact(models.Model):
    phone = models.CharField(
        max_length=30,
        null=True,
        blank=True,
        verbose_name='Phone Number',
        help_text='(000)000-0000')
    email = models.EmailField(
        max_length=128,
        null=True,
        blank=True,
        verbose_name='Email',
        help_text='example@email.com')

    def __str__(self):
        return f'{self.phone}, {self.email}'

    class Meta:
        verbose_name = 'Contact Info'
        verbose_name_plural = 'Contact Info'
