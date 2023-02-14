from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, AbstractUser, UserManager as OldUserManager

import uuid


class BaseManager(models.Manager):

    def get_queryset(self):
        return super(BaseManager, self).get_queryset().filter(is_deleted=False)


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True


class Account(AbstractUser, BaseModel):
    class Meta:
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'

    objects = OldUserManager()
