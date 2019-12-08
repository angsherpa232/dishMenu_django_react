This project (Dishes Menu [DM]) was bootstrapped with [Create React App] for the frontend and Django restframework for the backend.

# DISHES MENU (DM)

It is a single page and mobile friendly web application that provides the table for dishes with their price.

## Getting Started

DM was developed using React, and Djano Restframework. Users can sort the table by clicking on table header. Both ascending and descending sorting order is supported. Users can also search for his/her favourite dish from available list.

### Prerequisites

The following web technologies are necessary to run this application

[python3]<br/>
[git]

### Installing

From your console (e.g. cmd or GitBash) first clone the repository and enter the app root directory:

```
git clone https://github.com/angsherpa232/dishMenu_django_react.git
cd dishMenu_django_react
```

Install the necessary node modules specified in [requirements.txt] for django and [package.json] for react using:

(For Django modules related installation)

```
pip install -r requirements.txt
```

(For React related setup, first go inside client directory by using: `cd client` and then run)

```
npm install
```

## Build (important step)

To build the client application, firstly go inside client directory, then run

```
npm run build
```

This will create a build directory. Once the app is built, follow the running instructions

## Running

To run the application, from the root directory (not inside client), run:

```
python3 manage.py runserver
```

```
To view the client interface
Open your web browser and view the app at `localhost:8000/client/`
```

```
To view the admin interface to make changes
Open your web browser and view the app at `localhost:8000/admin/`
```

```
To view the api interface
Open your web browser and view the app at `localhost:8000/api/`
```

## Authentication

As a role of admin
username:
password: