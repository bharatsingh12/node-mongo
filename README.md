# Demo project with NodeJS and MongoDB using mongoose.

## To run the project:
```bash
$ npm install
$ npm start
```

## To test the API endpoints use postman:
Base URL will be: http://localhost:3000

**Usage:** `http://localhost:3000/<API_ENDPOINT>`


## Endpoints:
### ==================== User Registration: ====================

**API Endpoint:** /register

**Method:** POST

**Payload:**
{
    "name": "Rahul Singh",
    "email": "rahul.kr.singh1999@gmail.com",
    "age": 22,
    "password": "test124"
}



### ==================== User Login: ====================

**API Endpoint:** /login

**Method:** POST

**Payload:**
{
    "email": "bharat.singh40@gmail.com",
    "password": "test123"
}



### ==================== List all users: ====================

**API Endpoint:** /users

**Method:** GET



### ==================== User Update: ====================
// Note: Use _id of any user (which you want to update) from users list response

**API Endpoint:** /users/:id

**Method:** PATCH

**Payload:**
{
    "age": 31
}



### =============== Users count above specified age: ===============

**API Endpoint:** python/users/above-age/25

**Method:** GET

<br/>
<br/>
<br/>

# Author:
**Bharat Singh**
