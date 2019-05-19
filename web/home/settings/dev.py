'''Use this for development'''

from .base import *

DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

CORS_ORIGIN_WHITELIST = (
    'localhost:3000',
)