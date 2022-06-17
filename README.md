## Node + Express + Typescript + Firebase

This boilerplate is using the DDD design pattern, and we have the following structure:

```
├── domain (DEFINITION OF EACH ENTITY)
│   ├── user
│   │   ├── use cases (all use cases to use on controllers)
│   │   ├── model.ts (defining the model of user itself)
│   │   ├── repository (defining the interface of user repository)
│   ├── auth
│   │   ├── use cases (all use cases to use on controllers)
│   │   ├── model.ts (defining the model of auth itself)
│   │   ├── repository (defining the interface of auth repository)
├── infra (SETUP EXTERNAL SERVICES LIKE DBs, API's, etc)
│   ├── firebase (setup of firebase)
├── data (IMPLEMENTATION OF REPOSITORIES)
│   ├── user
│   │   ├── firebase (Firebase implementation of user repository)
│   ├── auth
│   │   ├── firebase (Firebase implementation of auth repository)
├── presentation (ROUTES, CONTROLLERS, MIDDLEWARES, BOOTSTRAP OF EACH ENTITY)
│   ├── common (all common interfaces, middlewares, etc)
│   │   ├── interfaces
│   │   ├── middlewares
│   │   │   ├── authentication
│   ├── user
│   │   ├── controllers (all controllers to use on routes)
│   │   ├── factories.ts (factories to build the instances for repositories, use cases and controllers)
│   │   ├── routes.ts (user routes)
│   ├── auth
│   │   ├── controllers (all controllers to use on routes)
│   │   ├── factories.ts (factories to build the instances for repositories, use cases and controllers)
│   │   ├── routes.ts (auth routes)
├── index.ts (application setup)
```
