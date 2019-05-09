'''Use this for production'''

from .base import *
import dj_database_url

DEBUG = False
ALLOWED_HOSTS += ['.career-consult.herokuapp.com']
WSGI_APPLICATION = 'home.wsgi.prod.application'

'''
DATABASES = {}
DATABASES['default'] = dj_database_url.config(conn_max_age=600)
'''

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

if 'DATABASE_URL' in os.environ:
    import dj_database_url
    DATABASES = {'default': dj_database_url.config()}