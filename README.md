# Covid-19 Tracker (Morocco)


## Introduction

Since Everybody has build a Coronva-virus tracker during Quarantine.

I Thought about playing with some VueJs and Docker, so I made this :smiley:

check: [http://ablil.tech:1337](http://ablil.tech:1337)

## Technologies

* Vue (@vue/cli 4.2.3) : No need to explain :wink:
* Docker (Docker version 19.03.8, build afacb8b7f0) : hosting the app
* Bootstrap 4.4.1 : styling UI
* Axios (0.19.2) : making API calls
* chart.js (2.9.3): generating graphs


## Example of usage

### Running on Docker

Make sure Docker is installed before precedding.

```
# clone the repo
> git clone https://github.com/ablil/covid-19-tracker covid19
> cd covid19

# Build Docker image and start container
> docker build -t covid19:latest .
docker run --name covid19 -d -p 8080:8080 covid19:latest
```

### Running in localhost (http-server)

```
# clone the repo
> git clone https://github.com/ablil/covid-19-tracker covid19
> cd covid19

# Install dependencies and build
> npm install
> npm run build

# Install http-server and deploy
> npm install -g http-server
> http-server -p 1337 dist/
```

## Overview

![overview1](.img/overview1.jpg)
![overview2](.img/overview2.jpg)