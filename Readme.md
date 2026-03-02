# 📘 User Registration API Documentation

## Endpoint Overview

**HTTP Method:** `POST`
**Route:** `/users/register`
**Content-Type:** `application/json`

The `/users/register` endpoint is responsible for creating a new user account in the system.

When a client (such as a frontend application or mobile app) sends user information to this endpoint:

1. The request data is validated.
2. The password is securely encrypted (hashed).
3. The user is stored in the database.
4. A JWT (JSON Web Token) is generated.
5. The created user data and authentication token are returned.

---

# 🔎 What Is This Endpoint Used For?

This endpoint allows new users to:

* Create an account
* Securely store their credentials
* Receive an authentication token for future requests

The returned token can be used to access protected routes in the application.

---

# 📥 Request Body Requirements

The endpoint expects a JSON object in the request body with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 🧾 Field Definitions

| Field              | Type   | Required | Description                                         |
| ------------------ | ------ | -------- | --------------------------------------------------- |
| fullname           | Object | Yes      | Contains user's first and last name                 |
| fullname.firstname | String | Yes      | User's first name (minimum 3 characters)            |
| fullname.lastname  | String | No       | User's last name (minimum 3 characters if provided) |
| email              | String | Yes      | User's email address (must be valid format)         |
| password           | String | Yes      | User's password (minimum 6 characters)              |

---

## 📌 Validation Rules (What Is Checked Before Creating a User)

Validation ensures the data is correct before saving it.

* `email` must be in valid email format (example: [name@example.com](mailto:name@example.com))
* `fullname.firstname` must be at least 3 characters long
* `password` must be at least 6 characters long
* If any required field is missing, the request will fail

If validation fails, the server returns a **400 Bad Request** response.

---

# 🔐 Security Process Explained Simply

### 1️⃣ Password Hashing

The password is never stored in plain text.

It is converted into a secure encrypted format using a hashing algorithm.
This ensures that even if the database is compromised, raw passwords cannot be read.

### 2️⃣ JWT Token Generation

After the user is successfully created, the server generates a JWT (JSON Web Token).

A JWT is:

* A secure digital token
* Used to prove the user's identity
* Required to access protected routes

The token contains the user ID and is signed using a secret key (`JWT_SECRET`).

---

# ✅ Successful Response

### Status Code: `201 Created`

This means the user account was successfully created.

```json
{
  "user": {
    "_id": "65f1234567890abcdef12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "<JWT_TOKEN>"
}
```

## Response Fields Explained

| Field    | Description                                     |
| -------- | ----------------------------------------------- |
| user     | The newly created user object from the database |
| user._id | Unique identifier for the user                  |
| token    | Authentication token for future requests        |

---

# ❌ Error Responses

## 400 – Bad Request

Returned when validation fails.

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### What This Means

* Some required data is missing or invalid
* The user must correct the input and try again

---

## 500 – Internal Server Error

Returned when something unexpected happens on the server.

Possible reasons:

* Database failure
* Server misconfiguration
* Missing environment variables

---

# 🔄 Internal Flow (Step-by-Step Technical Process)

1. Request reaches `/users/register`
2. `express-validator` checks request data
3. Password is hashed using `bcrypt`
4. User is created in MongoDB using Mongoose
5. JWT token is generated using `jsonwebtoken`
6. Server responds with `201 Created`

---

# ⚙️ Environment Requirements

The following environment variable must be defined:

```
JWT_SECRET=your_secret_key
```

This secret key is used to sign authentication tokens.

---

# 📌 Important Notes

* Email addresses must be unique (no duplicate accounts)
* Passwords are securely hashed before storage
* The returned token should be stored securely on the client side
* Never expose `JWT_SECRET` publicly

---

# 📎 Summary

The `/users/register` endpoint:

✔ Validates incoming data
✔ Secures user passwords
✔ Stores user information
✔ Generates authentication token
✔ Returns user data and access token

This endpoint is the foundation of the application's authentication system.

--------------------------------------------------------------------------------------------

📘 /users/login API Documentation
Endpoint Overview

HTTP Method: POST
Route: /users/login
Content-Type: application/json

The /users/login endpoint authenticates an existing user and returns an authentication token.

When a client (frontend app, mobile app, etc.) sends login credentials:

The request data is validated.

The email is checked in the database.

The password is compared with the stored hashed password.

A JWT (JSON Web Token) is generated.

The authenticated user data and token are returned.



🔎 What Is This Endpoint Used For?

This endpoint allows existing users to:
Log into their account
Verify their credentials securely
Receive an authentication token
Access protected routes



📥 Request Body Requirements

The endpoint expects a JSON object with the following structure:

{
  "email": "john@example.com",
  "password": "password123"
}


🧾 Field Definitions
Field	Type	Required	Description
email	String	Yes	User's registered email (valid format)
password	String	Yes	User's password (minimum 6 characters long)


📌 Validation Rules

Before authentication, the following checks are performed:
email must be in valid email format
password must be at least 6 characters long
If any required field is missing or invalid, request fails
If validation fails, the server returns:



❌ 400 – Bad Request
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}



🔐 Authentication Process Explained
1️⃣ Email Lookup

The system searches for a user with the provided email:

const user = await usermodel.findOne({email}).select('+password');

If no user is found:

{
  "message": "Invalid email or password"
}


2️⃣ Password Verification

The entered password is compared with the stored hashed password using a secure comparison method:

const isMatch = await user.comparePassword(password);

If the password does not match, the same generic error is returned:

{
  "message": "Invalid email or password"
}

⚠ The system intentionally does not specify whether the email or password is incorrect for security reasons.



3️⃣ JWT Token Generation

If authentication succeeds:

A JWT is generated

The token contains the user's ID

The token is signed using JWT_SECRET

This token must be included in future protected requests.

✅ Successful Response
Status Code: 200 OK
{
  "user": {
    "_id": "65f1234567890abcdef12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "<JWT_TOKEN>"
}


Response Fields Explained
Field	Description
user	Authenticated user object
token	JWT authentication token
❌ Error Responses
400 – Bad Request

Returned when:

Validation fails

Email does not exist

Password is incorrect

Example:

{
  "message": "Invalid email or password"
}
500 – Internal Server Error

Returned when an unexpected server error occurs.

Possible causes:

Database connection failure

Server configuration issue

Missing environment variables

🔄 Internal Flow (Step-by-Step)

Request reaches /users/login

express-validator validates request body

User is searched by email in MongoDB

Password is compared using secure hashing

JWT token is generated

Server responds with 200 OK

⚙️ Environment Requirements

The following environment variable must be defined:

JWT_SECRET=your_secret_key

This key is used to sign authentication tokens.

📌 Important Notes

The password is never returned in the response

Error messages are intentionally generic for security

The token should be stored securely on the client side

The token must be included in Authorization headers for protected routes

📎 Summary

The /users/login endpoint:

✔ Validates credentials
✔ Verifies user identity
✔ Securely compares hashed passwords
✔ Generates JWT token
✔ Returns authenticated user data

This endpoint enables secure access to the application for registered users.