## Running locally with docker-compose

#### Pre-requisites

- Make sure you have docker installed and running
- Make sure you have make installed

#### Get up and running

1. clone the repository by running:

```
git clone git@github.com:yguruco/yieldguru.git
```

2. cd into the project directory

```
cd yieldguru
```

3. Run ```make image-build``` to build needed images, this might take a while.
4. Run ```make up```to start services

7. Navigate to ```http://localhost:8080``` in your browser.

## Makefile commands

### Frontend install

Delete and reinstall node_modules

```make fontend-install```

### Frontend clean

```make frontend-clean```
