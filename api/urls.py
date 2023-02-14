from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.MyObtainTokenPairView.as_view(), name='login'),
    path('register/',  views.RegistrationView.as_view(), name='register'),
    path('refresh/', views.RefreshViewSet.as_view({'post'}), name='refresh'),
    path('accounts/', views.AccountViewList.as_view(), name='accounts'),

    # path('registration/', registration, name='registration'),
    # path('logout/', logout_view, name='logout'),
]
