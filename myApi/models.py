from django.db import models
from optimized_image.fields import OptimizedImageField

# Year dropdown choices
YEARS = [
        (1, 2005),
        (2, 2006),
        (3, 2007),
        (4, 2008),
        (5, 2009),
        (6, 2010),
        (7, 2011),
        (8, 2012),
        (9, 2013),
        (10, 2014),
        (11, 2015),
        (12, 2016),
        (13, 2017),
        (14, 2018),
        (15, 2019),
        (16, 2020),
    ]

# Months dropdown choices
MONTHS = [
    (1, 'January'),
    (2, 'February'),
    (3, 'March'),
    (4, 'May'),
    (5, 'April'),
    (6, "June"),
    (7, 'July'),
    (8, 'August'),
    (9, 'September'),
    (10, 'October'),
    (11, 'November'),
    (12, 'December'),
]

MONTHS_SHORT = [
    (1, 'Jan'),
    (2, 'Feb'),
    (3, 'Mar'),
    (4, 'May'),
    (5, 'Apr'),
    (6, "Jun"),
    (7, 'Jul'),
    (8, 'Aug'),
    (9, 'Sep'),
    (10, 'Oct'),
    (11, 'Nov'),
    (12, 'Dec'),
]


class Logo(models.Model):
    logo = OptimizedImageField(
        upload_to='logo',
        verbose_name='Logo'
    )
    favicon = OptimizedImageField(
        upload_to='logo',
        verbose_name='Favicon 16x16'
    )

    def __str__(self):
        return 'Logo & Favicon'

    class Meta:
        verbose_name = 'Logo & Favicon'
        verbose_name_plural = verbose_name


class Home(models.Model):
    name = models.CharField(
        max_length=30,
        verbose_name='Name'
    )
    intro = models.TextField(
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Home'
        verbose_name_plural = 'Home'


class About(models.Model):
    about = models.TextField(
        null=True,
        blank=True,
        verbose_name='About'
    )
    profile_img = OptimizedImageField(
        upload_to='about'
    )

    def __str__(self):
        return 'About'

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = verbose_name


class Education(models.Model):
    school_name = models.CharField(
        max_length=64,
        verbose_name='School Name'
    )
    major = models.CharField(
        max_length=64,
        null=True,
        blank=True,
        verbose_name='Major'
    )
    minor = models.CharField(
        max_length=64,
        null=True,
        blank=True,
        verbose_name='Minor'
    )
    start_month = models.IntegerField(
        choices=MONTHS_SHORT,
        null=True,
        blank=True,
        verbose_name='Start Month'
    )
    start_year = models.IntegerField(
        choices=YEARS,
        null=True,
        blank=True,
        verbose_name='Start Year'
    )
    end_month = models.IntegerField(
        choices=MONTHS_SHORT,
        null=True,
        blank=True,
        verbose_name='End Month'
    )
    end_year = models.IntegerField(
        choices=YEARS,
        null=True,
        blank=True,
        verbose_name='End Year'
    )

    def __str__(self):
        return self.school_name

    class Meta:
        verbose_name = 'Education'
        verbose_name_plural = verbose_name


class Skills(models.Model):
    skill_name = models.CharField(
        max_length=64,
        verbose_name='Skill/Tool Name'
    )
    CATEGORY_LIST = [
        (1, 'Language'),
        (2, 'Frameworks'),
        (3, 'Tools'),
        (4, 'Design')
    ]
    category = models.CharField(
        choices=CATEGORY_LIST,
        max_length=15,
    )
    skill_logo = OptimizedImageField(
        upload_to='skill_logo',
        null=True,
        blank=True,
        verbose_name='Skill Logo'
    )

    def __str__(self):
        return f"{self.skill_name} - {self.category}"

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'


class Projects(models.Model):
    title = models.CharField(
        max_length=64,
        null=True,
        blank=True,
        verbose_name='Project Title'
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name='Project Description'
    )
    tools_used = models.ManyToManyField(
        Skills,
        related_name='projects'
    )
    desktop_img = OptimizedImageField(
        upload_to='project',
        verbose_name='Project Desktop Image',
        null=True,
        blank=True
    )
    mobile_img = OptimizedImageField(
        upload_to='project',
        verbose_name='Project Mobile Image',
        null=True,
        blank=True
    )
    video = models.TextField(
        null=True,
        blank=True
    )


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


class SocialLinks(models.Model):
    instagram = models.TextField(
        null=True,
        blank=True,
        verbose_name='Instagram Link'
    )
    linkedin = models.TextField(
        null=True,
        blank=True,
        verbose_name='LinkedIn Link'
    )
    github = models.TextField(
        null=True,
        blank=True,
        verbose_name='GitHub Link'
    )
    facebook = models.TextField(
        null=True,
        blank=True,
        verbose_name='Facebook Link'
    )
    youtube = models.TextField(
        null=True,
        blank=True,
        verbose_name='Youtube Link'
    )
    medium = models.TextField(
        null=True,
        blank=True,
        verbose_name='Medium Link'
    )
    slack = models.TextField(
        null=True,
        blank=True,
        verbose_name='Slack Link'
    )
    CodePen = models.TextField(
        null=True,
        blank=True,
        verbose_name='CodePen Link'
    )
    stack_overflow = models.TextField(
        null=True,
        blank=True,
        verbose_name='StackOverflow Link'
    )
