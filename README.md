# Covid-19 Tracker (Morocco)

![CI:master](https://github.com/ablil/covid-19-tracker/workflows/CI/badge.svg?branch=master)
![CI:develop](https://github.com/ablil/covid-19-tracker/workflows/CI/badge.svg?branch=develop)

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


### Build & Run

make sure `http-sever` is installed with `npm i -g http-server`

```
# clone the repo
> git clone https://github.com/ablil/covid-19-tracker covid19
> cd covid19

> npm i
> npm run build
> cd dist && http-server
```
