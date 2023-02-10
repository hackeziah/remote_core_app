from django.urls import path
from .views import welcome, registration, login_view, logout_view
urlpatterns = [
    path('welcome/', welcome, name='welcome'),
    path('login/', login_view, name='login'),
    path('registration/', registration, name='registration'),
    path('logout/', logout_view, name='logout'),



]