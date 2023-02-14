from django.contrib import admin
from base.models import Account
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group, Permission


@admin.register(Account)
class UserAdmin(BaseUserAdmin):
	search_fields = ('username', 'first_name', 'last_name',)
	list_fields = ('username', 'first_name', 'last_name',)
	list_filter = ('is_active', 'groups',)
	admin_priority = 2
	edit_fields = (
		('Account Information', {
			'fields': ('username', 'password'),
		}),
		('Personal Information', {
			'fields': ('first_name', 'last_name', 'email'),
		}),
		('Permissions', {
			'fields': ('is_active', 'groups', 'user_permissions',),
		}),
		('Important dates', {
			'fields': ('last_login', 'date_joined')
		}),
	)
	readonly_fields = ('last_login', 'date_joined', 'created_at', 'updated_at',)
	formfield_querysets = {
		'groups': lambda: Group.objects.all(),
		'user_permissions': lambda: Permission.objects.prefetch_related('content_type'),
	}

