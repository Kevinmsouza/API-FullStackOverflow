# **API - Fullstack Overflow Developer**

## **About the project**

Fullstack Overflow Developer is an API for people to ask questions about anything. Anyone can publish questions and answers, and each question can have only 1 answer.

### **Routes**

- #### `GET /questions`
Response is a list of unanswered questions. Response example:
```json
[
	{
		"id": 12,
		"question": "Do you wanna go penguin surfing whit me?", 
		"student": "Aang", 
		"className": "Air",
		"submitAt": "2021-06-15 10:12"
	}
]
```

- #### `GET /questions/:id`
Response is a question. Response example for unanswered questions:
```json
{
    "question": "Do you wanna go penguin surfing whit me?", 
    "student": "Aang", 
    "className": "Air",
    "tags": "Avatar",
    "answered": false,
    "submitAt": "2021-06-15 10:12"
}
```
Response example for unanswered questions:
```json
{
    "question": "Do you wanna go penguin surfing whit me?", 
    "student": "Aang", 
    "className": "Air",
    "tags": "Avatar",
    "answered": true,
    "submitAt": "2021-06-15 10:12",
    "answeredAt": "2021-06-15 10:30",
	"answeredBy": "Saitama",
	"answer": "*Punch*" 
}
```

- #### `POST /questions`
**Requires a body** like: 
```json
{
	"question": "Do you wanna go penguin surfing whit me?", 
    "student": "Aang", 
    "className": "Air",
    "tags": "Avatar",
}
```

Response is the id of the posted question. Response example:
```json
{
    "id": 12
}
```

- #### `POST /questions/:id`
**Requires a body** like: 
```json
{
	"answer": "*punch*" 
}
```
and a **Bearer token** on Authorization header.
Response is a status code 201.

- #### `POST /users`
**Requires a body** like: 
```json
{
	"name": "Saitama",
	"class": "B tier" 
}
```
Response is a token to use when answering questions. Response example:
```json
{
	"token": "86664a69-ab16-40ee-a321-4b1fcd542d81"
}
```

### **Built with**

- [Node JS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

 <br />

## **Getting Started**

### **Prerequisites**

- npm

<br />

### **Installation**

1.  Clone this repository

```sh
https://github.com/Kevinmsouza/API-FullStackOverflow.git
```

2. Install the dependencies executing command

```sh
npm i
```

3. Create a .env file in folder (root) with following variables ( example values )

```sh
DATABASE_URL=postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_DATABASE
PORT=4000
```

4. Create a postgres database and fill .env with database credentials

   <br />

5. Run commands (copy&paste) of tables.sql inside the database

   <br />
   <br />

### **How to run**

1. Start the API

```sh
npm run start
```

## **Notes**

#### The goal behind this project was to train typescript and code architecture. I'm aware that it can improve a lot and I plan to refactor it in the future, adding and changing a few things, including:
- Restructure the database to allow for multiple answers and better way to store & relate tags.
- Add security tokens generated by session, not by registration.
- Add a user ranking route that gets the top 10 active users.
- Add a upvote & downvote system to rank questions.