from base.models import Account
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email',)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email',)
        extra_kwargs = {
            'password':{'write_only': True},
        }

    def create(self, validated_data):
        user = Account.objects.create_user(validated_data['username'],
                                           password=validated_data['password'],
                                           first_name=validated_data['first_name'],
                                           last_name=validated_data['last_name'],
                                           email=validated_data['email']
                                           )

        return user