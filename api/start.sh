#!/bin/bash

python manage.py migrate
python manage.py loaddata asq
python manage.py runserver 0.0.0.0:8000;
