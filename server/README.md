# Run the steps into server folder

## Install python>=3.9 and virtualenv
- conda create -n mypyapp python=3.9 virtualenv
- conda activate mypyapp
- virtualenv -p python3 env

## Launch server
- pip install -r requirements.txt
- python manage.py makemigrations cursos
- python manage.py migrate
- python manage.py runserver
- http://localhost:8000/cursos/api/v1/

# Docs
- http://localhost:8000/cursos/docs

# Logging as admin
- python manage.py createsuperuser (to create admin and pass )
- python manage.py runserver
- http://localhost:8000/admin
