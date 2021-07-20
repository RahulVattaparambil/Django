from django.db import models

class Player(models.Model):
	name = models.CharField(max_length=100)
	age = models.IntegerField()
	matches = models.IntegerField()
	runs = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add=True)
	
