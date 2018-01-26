# Todo App

Build a Fully-Fledged Todo App with Spring Boot & MongoDB in the Backend and Angular in the frontend.

## Prerequisite for running todo app

	1. Java - 1.8.x

	2. Maven - 3.x.x

	3. MongoDB - 3.x.x (for this project I am using Mlab online MongoDB)
	
	4. NodeJs

## Steps to Setup

**1. Clone the application**

```bash
git clone git@github.com:sanjaymca1986/todo.git
```

**2. Build and run the backend app using maven**

```bash
you can run the app without packaging it using inside 'backend' folder-
```

```bash
mvn spring-boot:run
```
Backend server will run on <http://localhost:8080>

**3. Run the frontend app using npm inside 'frontend'**

```bash
cd frontend
npm install
```

```bash
npm start 
or 
ng serve -o (if you have angular Cli)
```

Frontend server will run on <http://localhost:4200>
