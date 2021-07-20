from django.db import models

# Create your models here.
class Posts(models.Model):
	image = models.ImageField()
	file = models.FileField()
