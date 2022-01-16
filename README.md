# Pacific - An Event Driven Microservice Application to manage data

This application will fetch data from sources like MySQL, SQL Server, MongoDB, PostgresSQL, etc and will save into desired format.
You can query data sources live or you can run/schedule jobs to fetch the data for you in future.

## Technology stack

- NodeJS - Server side language for all the microservices
- ReactJS - Client side language
- RabbitMQ - Messaging broker or Event bus for async communication between the services and for data transfer
- RESTful API - To access services
- JWT & Bcryptjs - Authentication & Authorization strategy
- GIT - Version control
- Tools - ESLint, Prettier, NPM, VSCode, etc

## Softwares required

- NodeJS
- Docker Desktop
- Kubernetes
- Microsoft SQL Server Database & SSMS
- MySQL Database & SqlYog
- MongoDB Database & Robo 3T
- RabbitMQ

## Development setup

Go to the project root level and execute following commands in sequence

- To install all the node/npm dependecies execute `npm run install-all-dependencies`
- To spin the kubernetes cluster for required services like database, rabbitmq, etc execute `npm run all`
- Manually create databases with names audit, logging, monitor, notification, worker, user, web in the above created database pod/container
- Manually create exchanges with following ocnfigurations
  - Name - audit | Type - fanout
  - Name - worker | Type - fanout
  - Name - monitor | Type - fanout
  - Name - logging | Type - fanout
  - Name - notification | Type - fanout
  - Name - user | Type - fanout
  - Name - web | Type - fanout
- Manually create queues with following ocnfigurations
  - Name - audit | Exhange - audit, monitor, notification, worker, web, user
  - Name - worker | Exhange - worker
  - Name - monitor | Exhange - monitor
  - Name - logging | Exhange - logging
  - Name - notification | Exhange - notification
  - Name - user | Exhange - user
  - Name - web | Exhange - web
- To run the microservices in dev mode execute `skaffold dev`
- To run the UI execute `cd client` and then `npm start`

To stop everything, Go to the project root level and execute following commands in a sequence

- To stop microservices press `Ctrl + C` (it will stop running `skaffold dev`)
- To stop the kubernetes cluster `npm run stop-all`
- To stop the running UI press `Ctrl + C` (it will stop running `npm start`)
