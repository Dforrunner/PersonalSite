from django.db import models
from .image_handlers import to_webp_optimized, to_jpg_optimized

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


class Sidebar(models.Model):
    logo = models.FileField(
        upload_to='',
        verbose_name='Upload Logo',
        blank=True,
        null=True
    )
    logo_jpg = models.URLField(
        max_length=255,
        verbose_name='Logo URL (JPG)',
        blank=True,
        null=True
    )
    logo_webp = models.URLField(
        max_length=255,
        verbose_name='Logo URL (Webp)',
        blank=True,
        null=True
    )
    avatar = models.FileField(
        upload_to='',
        verbose_name=' Upload Avatar',
        blank=True,
        null=True
    )
    avatar_jpg = models.URLField(
        max_length=255,
        verbose_name='Avatar URL (JPG)',
        blank=True,
        null=True
    )
    avatar_webp = models.URLField(
        max_length=255,
        verbose_name='Avatar URL (Webp)',
        blank=True,
        null=True
    )
    instagram = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='Instagram URL'
    )
    linkedin = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='LinkedIn URL'
    )
    github = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='GitHub URL'
    )
    facebook = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='Facebook URL'
    )
    youtube = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='Youtube URL'
    )
    medium = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='Medium URL'
    )
    slack = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='Slack URL'
    )
    CodePen = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='CodePen URL'
    )
    stack_overflow = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name='StackOverflow URL'
    )

    # Optimize images and save
    def save(self, *args, **kwargs):
        w = 150
        h = 'auto'

        # Optimizing images before saving
        if self.logo:
            logo = self.logo
            self.logo_jpg = to_jpg_optimized(field=logo, width=w, height=h)
            self.logo_webp = to_webp_optimized(field=logo, width=w, height=h)
        if self.avatar:
            avatar = self.avatar
            self.avatar_jpg = to_jpg_optimized(field=avatar, width=w, height=h)
            self.avatar_webp = to_webp_optimized(field=avatar, width=w, height=h)

        # Saving changes
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
        verbose_name='Upload Profile Image',
        blank=True,
        null=True
    )
    profile_img_jpg = models.URLField(
        max_length=255,
        verbose_name='Profile Image URL (JPG)',
        blank=True,
        null=True
    )
    profile_img_webp = models.URLField(
        max_length=255,
        verbose_name='Profile Image URL (Webp)',
        blank=True,
        null=True
    )

    # Optimize images and save
    def save(self, *args, **kwargs):
        w = 500
        h = 'auto'

        # Converting image to jpg and optimizing
        if self.profile_img:
            profile_img = self.profile_img
            self.profile_img_jpg = to_jpg_optimized(field=profile_img, width=w, height=h)
            self.profile_img_webp = to_webp_optimized(field=profile_img, width=w, height=w)

            # Saving changes
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
    list_order = models.IntegerField(
        choices=ORDER_CHOICES,
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.title} at {self.company_name}"

    class Meta:
        verbose_name = "Experience"
        verbose_name_plural = "Experiences"
        ordering = ('list_order',)


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
        verbose_name='Upload Desktop Image',
        null=True,
        blank=True
    )
    desktop_img_jpg = models.URLField(
        verbose_name='Desktop Image URL (JPG)',
        max_length=255,
        null=True,
        blank=True
    )
    desktop_img_webp = models.URLField(
        verbose_name='Desktop Image URL (Webp)',
        max_length=255,
        null=True,
        blank=True
    )
    tablet_img = models.FileField(
        upload_to='',
        verbose_name='Upload Tablet Image',
        null=True,
        blank=True
    )
    tablet_img_jpg = models.URLField(
        verbose_name='Tablet Image URL (JPG)',
        max_length=255,
        null=True,
        blank=True
    )
    tablet_img_webp = models.URLField(
        verbose_name='Tablet Image URL (Webp)',
        max_length=255,
        null=True,
        blank=True
    )
    mobile_img = models.FileField(
        upload_to='',
        verbose_name='Upload Mobile Image',
        null=True,
        blank=True
    )
    mobile_img_jpg = models.URLField(
        verbose_name='Mobile Image URL (JPG)',
        max_length=255,
        null=True,
        blank=True
    )
    mobile_img_webp = models.URLField(
        verbose_name='Mobile Image URL (Webp)',
        max_length=255,
        null=True,
        blank=True
    )
    github = models.URLField(
        max_length=255,
        verbose_name='GitHub URL',
        null=True,
        blank=True
    )
    site_link = models.URLField(
        max_length=255,
        verbose_name='Site URL',
        null=True,
        blank=True
    )
    video = models.URLField(
        max_length=255,
        verbose_name='Video URL',
        null=True,
        blank=True
    )
    list_order = models.IntegerField(
        choices=ORDER_CHOICES,
        null=True,
        blank=True
    )

    # Converting images to Webp format and resizing
    def save(self, *args, **kwargs):
        dw = 1000
        dh = 'auto'
        tw = 500
        th = 'auto'
        mw = 350
        mh = 'auto'

        # Converting image to jpg and optimizing
        if self.desktop_img:
            desktop_img = self.desktop_img
            self.desktop_img_jpg = to_jpg_optimized(field=desktop_img, width=dw, height=dh)
            self.desktop_img_webp = to_webp_optimized(field=desktop_img, width=dw, height=dh)
        if self.tablet_img:
            tablet_img = self.tablet_img
            self.tablet_img_jpg = to_jpg_optimized(field=tablet_img, width=tw, height=th)
            self.tablet_img_webp = to_webp_optimized(field=tablet_img, width=tw, height=th)
        if self.mobile_img:
            mobile_img = self.mobile_img
            self.mobile_img_jpg = to_jpg_optimized(field=mobile_img, width=mw, height=mh)
            self.mobile_img_webp = to_webp_optimized(field=mobile_img, width=mw, height=mh)

        # Saving changes
        super(Projects, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ('list_order',)


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
