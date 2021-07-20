from stats.models import Player
from rest_framework import viewsets, permissions
from .serializers import PlayerSerializer

#player viewset
class PlayerViewSet(viewsets.ModelViewSet):
	queryset = Player.objects.all()
	permissions_classes = [
		permissions.AllowAny
	]
	serializer_class = PlayerSerializer
