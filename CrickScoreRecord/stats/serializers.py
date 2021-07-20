from rest_framework import serializers
from stats.models import Player

#Player serializer
class PlayerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Player
		fields = '__all__'
