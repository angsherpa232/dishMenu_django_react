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
pipenv install --three (initiate virtual environment with pyhon 3)
pipenv shell (activate the virtual environment)
pip3 install -r requirements.txt (install modules related to server)
pip3 manage.py migrate (migrate based on models)
pip3 manage.py createsuperuser (create superuser as admin)
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

To view the admin interface to make changes
Open your web browser and view the app at `localhost:8000/admin/`
(Add dishes and price to populate the database)
```

```

To view the api interface
Open your web browser and view the app at `localhost:8000/api/`

```

```

To make a change to particular dish item using id
Open your web browser and view the app at `localhost:8000/api/:id` eg: `localhost:8000/api/2`

```

```

To list out dishes [above,below,within] certain price range
Open your web browser and view the app at `localhost:8000/api/?min_price=yourprice&max_price=yourprice` eg: `localhost:8000/api/min_price=2&max_price=20`

```
```

To view the client interface
Open your web browser and view the app at `localhost:8000/client/`
(Note: Throws an error if build step as mentioned above is not performed)
```
