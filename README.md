# Challenge
## Technologies
#### Backend
```sh
nodeJs
expressJs
nodemon
mongoose
jsonwebtoken
bcryptjs
```
#### Frontend
```sh
reactJs
axios
react-router-dom
react-toastify
react-chartjs-2
```
#### Database
```sh
mongodb
```

## Add collections to your database.
- First of all you have to create a database with the name of ***'survey'***
- Open the database-collection folder and take the files ***'surveys.json'*** and ***'users.json'*** and import them into your database.

## Steps
 - open the ***'Challenge'*** project
 - open the ***'api-challenge'*** project and run the ***'npm i'*** command to download the dependencies, then run the ***'npm run dev'*** command to start the project.
 - open the project ***'ui-challenge'*** and run the command ***'npm i'*** to download the dependencies, then run the command ***'npm run dev'*** to start the project.

## Credentials
In the collection of users the passwords are hashed in this case let me show you how the credentials would look like completely
#### First User
- username: "hectorZapata",
- password: "challenge"
#### Second User
- username: "cesar",
- password: "challenge"

## Routes
```sh
'/' in this path is the form to answer the survey
'/login' in this path is the login form
'/admin' in this path you will find the administration area, where you can see the graphs of the surveys results.
```