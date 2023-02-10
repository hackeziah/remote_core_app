
from base.forms import UserAccountAuthenticationForm, RegistrationForm
from django.contrib.auth import login, authenticate, logout
from django.shortcuts import render, redirect
# from .decorators import unthentication_user

from django.urls import reverse, reverse_lazy
from django.contrib.auth.decorators import login_required
from django.contrib import messages


def logout_view(request):
    try:
        del request.session['user']
    except:
        pass
    logout(request)
    return redirect('/login/')

@login_required(login_url='/login/')
def welcome(request):
    template = 'welcome.html'
    context = {
        'user': request.user.username if request.user else "No User",
        'full_name': f"{request.user.last_name}, {request.user.first_name}" if request.user.last_name \
                                               and request.user.first_name else None

    }
    return render(request, template, context)


def registration(request):
    context = {}
    if request.POST:
        form = RegistrationForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/welcome/')

        else:
            context['registration_form'] = form
    else:
        form = RegistrationForm()
        context['registration_form'] = form
        return render(request, 'registration.html', context)


def login_view(request):
    context = {}
    if request.user.is_authenticated:
        return redirect('/welcome/')
    if request.POST:
        form = UserAccountAuthenticationForm(request.POST)
        if form.is_valid:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return redirect('/welcome/')
            else:
                return render(request, 'login.html', {'error_message': 'Your account has been disabled please just with the approval of account'})
    else:
        form = UserAccountAuthenticationForm()
    context['login_form'] = form
    return render(request, "login.html", context)

