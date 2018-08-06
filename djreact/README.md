# Getting Started
1. Use pip to install Pipenv and its dependencies,
2. pip install pipenv
3. Change directory to the folder containing your Python project and run 'pipenv install'
4. This will create two new files, Pipfile and Pipfile.lock, in your project directory, and a new virtual environment.

# Setting up Django
1. Install Django with pipenv install django.
2. Start a django project by running 'django-admin startproject name_of_your_project_here'.
3. Change directory to the project root and create a new app with 'django-admin startapp name_of_your_app'.
4. Add your new app to installed apps in settings.py.
5. Run app with 'python manage.py runserver'.

# Setting up React
1. Have Node.js and NPM installed.
2. Run 'npm install -g create-react-app'.
3. Create a new app with 'create-react-app name_of_your_project'.
4. Copy/cut all the contents of the React app and paste in the root of the Django project.
5. Run app with npm start from the project root.
