from django.db import models
from .image_handlers import to_webp_resized, png_compressed_resized

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
    ('1', 'January'),
    ('2', 'February'),
    ('3', 'March'),
    ('4', 'May'),
    ('5', 'April'),
    ('6', "June"),
    ('7', 'July'),
    ('8', 'August'),
    ('9', 'September'),
    ('10', 'October'),
    ('11', 'November'),
    ('12', 'December'),
]

MONTHS_SHORT = [
    ('1', 'Jan'),
    ('2', 'Feb'),
    ('3', 'Mar'),
    ('4', 'May'),
    ('5', 'Apr'),
    ('6', "Jun"),
    ('7', 'Jul'),
    ('8', 'Aug'),
    ('9', 'Sep'),
    ('10', 'Oct'),
    ('11', 'Nov'),
    ('12', 'Dec'),
]


class Sidebar(models.Model):
    logo = models.FileField(
        upload_to='logo',
        verbose_name='Logo',
        blank=True,
        null=True
    )
    avatar = models.FileField(
        upload_to='',
        verbose_name='Avatar',
        blank=True,
        null=True
    )
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

    # Converting images to Webp format and resizing
    def save(self, *args, **kwargs):
        if self.logo:
            self.logo = png_compressed_resized(field=self.logo)
        if self.avatar:
            self.avatar = png_compressed_resized(field=self.avatar)
        super(Sidebar, self).save(*args, **kwargs)

    def __str__(self):
        return 'Sidebar Content'

    class Meta:
        verbose_name = 'Sidebar Content'
        verbose_name_plural = 'Sidebar Contents'


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
    p_title = models.CharField(
        max_length=64,
        null=True,
        blank=True,
        verbose_name='Paragraph 1 Title'
    )
    p1 = models.TextField(
        null=True,
        blank=True,
        verbose_name='Paragraph 1'
    )
    p2 = models.TextField(
        null=True,
        blank=True,
        verbose_name='Paragraph 2'
    )
    p3 = models.TextField(
        null=True,
        blank=True,
        verbose_name='Paragraph 3'
    )
    profile_img = models.FileField(
        upload_to='',
        blank=True,
        null=True
    )

    # Converting images to Webp format and resizing
    def save(self, *args, **kwargs):
        if self.profile_img:
            self.profile_img = to_webp_resized(field=self.profile_img, width=500, height='auto')
        super(About, self).save(*args, **kwargs)

    def __str__(self):
        return 'About'

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = verbose_name


class ResponsibilityList(models.Model):
    responsibility = models.CharField(
        max_length=255,
    )

    def __str__(self):
        return self.responsibility


class Experience(models.Model):
    title = models.CharField(
        max_length=64,
    )
    company_name = models.CharField(
        max_length=64,
    )
    start_month = models.CharField(
        choices=MONTHS,
        max_length=64,
    )
    start_year = models.IntegerField(
        choices=YEARS,
    )
    end_month = models.CharField(
        choices=MONTHS,
        max_length=64,
    )
    end_year = models.IntegerField(
        choices=YEARS
    )
    responsibilities = models.ManyToManyField(
        ResponsibilityList,
        related_name='experience'
    )

    def __str__(self):
        return f"{self.title} at {self.company_name}"

    class Meta:
        verbose_name = "Experience"
        verbose_name_plural = "Experiences"


class SkillNames(models.Model):
    skill_name = models.CharField(
        max_length=64,
        verbose_name='Skill/Tool Name',
        null=True,
        blank=True
    )

    def __str__(self):
        return self.skill_name

    class Meta:
        verbose_name_plural = 'Skill Names'


class Skills(models.Model):
    skill_category = models.CharField(
        max_length=64,
        verbose_name='Skill Category',
        null=True,
        blank=True
    )
    skill_names = models.ManyToManyField(
        SkillNames,
        related_name='skills',
        verbose_name="Skills that fit Category")

    def __str__(self):
        return f"{self.skill_category} "

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
        SkillNames,
        related_name='projects'
    )
    desktop_img = models.FileField(
        upload_to='',
        verbose_name='Project Desktop Image',
        null=True,
        blank=True
    )
    tablet_img = models.FileField(
        upload_to='',
        verbose_name='Project Tablet Image',
        null=True,
        blank=True
    )
    mobile_img = models.FileField(
        upload_to='',
        verbose_name='Project Mobile Image',
        null=True,
        blank=True
    )
    github = models.TextField(
        null=True,
        blank=True
    )
    site_link = models.TextField(
        null=True,
        blank=True
    )
    video = models.TextField(
        null=True,
        blank=True
    )

    ORDER_CHOICES = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),
        (11, 11),
        (12, 12),
        (13, 13),
        (14, 14),
        (15, 15),
        (16, 16),
        (17, 17),
        (18, 18),
        (19, 19),
        (20, 20),
        (21, 21),
        (22, 22),
        (23, 23),
        (24, 24),
        (25, 25),
        (26, 26),
        (27, 27),
        (28, 28),
        (29, 29),
        (30, 30)
    ]

    list_order = models.IntegerField(choices=ORDER_CHOICES, null=True, blank=True)

    # Converting images to Webp format and resizing
    def save(self, *args, **kwargs):
        if self.desktop_img:
            self.desktop_img = to_webp_resized(field=self.desktop_img, width=1000, height='auto')
        if self.tablet_img:
            self.tablet_img = to_webp_resized(field=self.tablet_img, width=500, height='auto')
        if self.mobile_img:
            self.mobile_img = to_webp_resized(field=self.mobile_img, width=350, height='auto')
        super(Projects, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ('list_order', )


class Contact(models.Model):
    email = models.EmailField(
        max_length=128,
        null=True,
        blank=True,
        verbose_name='Email',
        help_text='example@email.com')

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Contact Info'
        verbose_name_plural = 'Contact Info'


class GoogleMap(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    marker = models.FileField(upload_to='map_marker')

    def __str__(self):
        return f'Location {self.latitude} x {self.longitude}'

    class Meta:
        verbose_name = 'Google Map Info'
        verbose_name_plural = 'Google Map Info'
