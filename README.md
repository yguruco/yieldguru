## Running locally with docker-compose

#### Pre-requisites

- Make sure you have docker installed and running
- Make sure you have make installes

#### Get up and running

1. clone the repository by running:

```
git clone git@github.com:wach-ric/Yield-Guru.git
```

2. cd into the project directory

```
cd Yield-Guru
```

3. Run ```cp ./main/.env.example ./main/.env```

4. Run ```make init``` to install all frontend and backend dependencies and start the docker services.

5. Run ```make watch``` to start the vite dev server and watch for changes

6. Navigate to ```http://localhost:8080``` in your browser.

## Makefile commands

### watch

Starts vite dev server and watches for changes

```make watch```

### Backend setup

Installs laravel composer dependecies and generates application key.

```make backend-install```

### Frontend install

Delete and reinstall node_modules

```make fontend-install```

### Frontend clean

```make frontend-clean```