# Flozy V2.0

## Getting started

To make it easy for you to get started with Flozy - Sales Dashboard.

## Requirements

- [Python - 3.11.4](https://www.python.org/downloads/)
- [NodeJS - 18.9.1](https://nodejs.org/en/download)
- [PostgreSQL - 15.3](https://www.postgresql.org/download/macosx/)
- [MySQL - 8.1.0](https://dev.mysql.com/downloads/mysql/)
- [VSCode - Latest](https://code.visualstudio.com/download)

## Clone the Repository

Clone the Repository using the following git commands.

```
mkdir flozy_dashboard
cd flozy_dashboard
git clone https://gitlab.com/flozy/flozy-dashboard.git ./
git pull
git switch dev
```

## Folders

    .
    ├── .vscode   # contains settings for vscode editor                 
    ├── client    # Front-end ReactJS Code      
        ├── .husky  # contains pre-commit rules
        ├── public
        └── src   # ReactJS Code
        └── .env   # enviroment variables Important!
        └── package.json   # npm modules list
    ├── server   # Back-end API Django Code
        ├── flozy  # Django Project Outer Folder
            ├── flozy   # Django Project Folder
                └── .env   # enviroment variables Important!
            └── agflow  # Django App 1
            └── sales   # Django App 2       
            └── manage.py   # Django runserver file 
        ├── requirements.txt   # python modules list
    ├── .gitignore # contains igonre files for git
    └── README.md

## Enviroment Variables

Create ``.env`` file inside the folder with variables as follows.

- ``client/.env``

    ```
    # API Host
    REACT_APP_API_HOST=http://localhost:8000/
    ```

- ``server/flozy/flozy/.env``

    ```
    # Debug will be off in production
    DEBUG=on

    # Default Database (PostgreSQL)
    DEFAULT_DB_NAME=dbname
    DEFAULT_DB_HOST=localhost
    DEFAULT_DB_USER=username
    DEFAULT_DB_PASSWORD=password
    DEFAULT_DB_PORT=5432

    # AgenciFlow Database (MySQL)
    AGFLOW_DB_NAME=dbname
    AGFLOW_DB_HOST=localhost
    AGFLOW_DB_USER=username
    AGFLOW_DB_PASSWORD=password
    AGFLOW_DB_PORT=3306

    # SendGrid Mail Config
    SENDGRID_API_KEY=*****

    # JWT Secret
    JWT_SECRET_KEY=****

    # CORS
    # will be removed in production
    CORS_ALLOWED_ORIGINS="<http://localhost:3000>"
    ```

## Installation - ``client``

Move to the flozy_dashboard directory and run the following commands in your terminal.

```
cd client
npm install
npm run start
```

## Installation - ``server``

Move to the flozy_dashboard directory and run the following commands in your terminal.

```
cd server
## To create virtual environment
python3.11 venv venv 
## To activate virtual environment
source venv/bin/activate
## After successfull activate you will see (venv) in the terminal
## Then run the installation command below
pip install -r requirements.txt
## Move to Project
cd flozy
## To apply changes of models in the DB
python manage.py makemigrations
python manage.py migrate
## To run the server
python manage.py runserver
```

## Editor Setup - ``VSCode``

``.vscode`` folder contains the settings for the editor. By default, Editor will ask the recommended extensions to install.

The formatter ensures to format the code on save.

    - If not, kindly install the below extensions listed.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Black Fromatter](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter)
- [Black](Black)

## Available URL's

Client localhost: <http://localhost:3000>

Server API Documentation: <http://localhost:8000/swagger/>

    This Server API Documentation will list the available API's in the project.

***
