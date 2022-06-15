## Node + Express + Typescript + Firebase

This boilerplate is using the DDD design pattern, and we have the following structure:

```
├── domain
│   ├── user (just an example of a model)
│   │   ├── use cases (all use cases to use on controllers)
│   │   ├── model.ts (defining the model of user itself)
│   │   ├── repository (defining the interface of repository for the user model)
├── infra
│   ├── firebase (at this path level, we have the implementation of the repositories)
│   │   ├── user.ts (implementing the user repositories using the firebase)
│   ├── (here we could have postgres, redis, etc implementing the same repositories)
├── services
│   ├── interfaces (all common interfaces for the services layer)
│   │   ├── controller.ts (defining the controller interface)
│   ├── user
│   │   ├── controllers (all controllers to use on routes)
│   │   ├── factories.ts (factories to build the instances for repositories, use cases and controllers)
│   │   ├── routes.ts (model routes)
├── index.ts (application setup)
```
