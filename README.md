[![Build Status](https://travis-ci.com/Nalhin/Chess.svg?branch=master)](https://travis-ci.com/Nalhin/Chess)
[![Codecov](https://codecov.io/gh/Nalhin/Chess/branch/master/graph/badge.svg)](https://codecov.io/gh/Nalhin/Chess)
[![CodeFactor](https://www.codefactor.io/repository/github/nalhin/chess/badge)](https://www.codefactor.io/repository/github/nalhin/chess)
# Chess

Chess website designed to host multiple chess games simultaneously. 
Frontend has been written in Typescript with React.
Backend has been developed in docker oriented microservice architecture utilizing Spring Boot flexibility. 

## Functionality
    
Website functionality consist of the following:
* user authentication
* user profile
* queue
* chess games
* chat
* game history

## Showcase

WORK IN PROGRESS

## Technology Stack

### Frontend

* React
* Redux
* Redux-Saga
* Rxjs
* Stomp Client
* Emotion

### Backend

* Java
* Spring Boot
* Spring Security
* Spring MVC
* Spring Messaging (Websocket communication)
* Eureka Server
* Spring Cloud Gateway
* Kafka
* Mysql
* Docker

## Folder Structure

### Frontend

```
src
├── components (reusable components)
├── constants (contant values)
├── interfaces (typescript interfaces)
├── pages (routing with associated pages)
├── store (redux store)
│   ├── chat
│   ├── customRouter
│   ├── game
│   ├── gameHistory
│   ├── queue
│   ├── toaster
│   └── user
│
├── styles (emotion theme and style variables)
├── utils (utility functions)
└── websocket (websocket config and multiton)
```

Store (redux) features "feature" (Duck architecture) folder structure.
Redundant files were omitted.

```
example
├── example.actions.ts
├── example.saga.ts
├── example.reducer.ts
├── example.types.ts
├── example.subscriptions.ts
├── example.api.ts
└── example.selectors.ts

```

### Backend

Folder structure

```
server 
├── authentication-service
├── chat-service
├── game-service 
├── queue-service
├── history-service
├── gateway-service
└── eureka-server
```

## TODO

* Refactor game interface (add players, timer)
* Refactor chat backend
* Add user validation for every service
* Refactor clock to be reliable.
* Refactor styles.
* Add tests (test coverage 80-90%+).


