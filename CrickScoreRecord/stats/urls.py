from rest_framework import routers
from .api import PlayerViewSet

router = routers.DefaultRouter()
router.register('api/stats', PlayerViewSet, 'stats')

urlpatterns = router.urls