from rest_framework import viewsets
from .serializers import PostsSerializer
from .models import Posts
import requests
import cv2 as cv
from django.shortcuts import render


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by('image')
    serializer_class = PostsSerializer

def index(request):
    return render(request, 'home.html')

def home(request):
    image=None
    if request.method == 'POST':
        img=request.POST.get('myfile')
        xml=request.POST.get('myxmlfile')
        image=cv.imread(img)
        image=cv.rectangle(image,(249,215),(444,368),(0,0,255),2)



    queryset = Posts.objects.all().order_by('image')
    #response = requests.get('http://127.0.0.1:8000/posts/')
    #print(response)
    #data = response.json
    #image=data
    return render(request, 'detect.html', {'data': image})