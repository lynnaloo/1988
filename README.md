# 1988

1988 was an exceptionally good year in the 80s. 1988 brought you amazing things like the movie Heathers and the show Mystery Science Theater 3000.

## Other greats from 1988:

Music:

* Father Figure – George Michael
* Sweet Child O’ Mine – Guns N’ Roses
* Get Outta My Dreams, Get into My Car – Billy Ocean
* Wild, Wild West – Escape Club
* Don’t Worry Be Happy – Bobby McFerrin
* It Takes Two – Rob Base & D.J. E-Z Rock

Notable Events:
* Edmonton Oilers win the Stanley Cup
* Doppler radar was invented
* 13% of Americans surveyed thought the Moon was made of cheese
* Table Tennis (Ping Pong) became an Olympic Sport
* CDs out-sold vinyl records for the first time

A Serverless Framework Example with a simple HTTP service deployed on four different cloud platforms - John (Amazon Web Services), Paul (IBM Cloud), George (Google Cloud Platform, and Ringo (Microsoft Azure)

## Setup

See the `README.md` in each service for more instructions for that FaaS environment.

# Install

With [Node LTS](https://nodejs.org/) installed, install the Serverless Framework:

```
$ npm install -g serverless
```

Clone this repository

```
$ git clone git@github.com:lynnaloo/1988.git
$ cd 1988
```

Choose a cloud platform, install libraries, deploy, and run!

```
$ cd microsoft
$ npm install
$ serverless deploy
$ serverless invoke -f sing
```

Since these are HTTP services, you can execute them like a REST API

```
http://{generated cloud platform url}/best
```


