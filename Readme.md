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

- Create an account
- Securely store their credentials
- Receive an authentication token for future requests

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

- `email` must be in valid email format (example: [name@example.com](mailto:name@example.com))
- `fullname.firstname` must be at least 3 characters long
- `password` must be at least 6 characters long
- If any required field is missing, the request will fail

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

- A secure digital token
- Used to prove the user's identity
- Required to access protected routes

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

| Field     | Description                                     |
| --------- | ----------------------------------------------- |
| user      | The newly created user object from the database |
| user.\_id | Unique identifier for the user                  |
| token     | Authentication token for future requests        |

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

- Some required data is missing or invalid
- The user must correct the input and try again

---

## 500 – Internal Server Error

Returned when something unexpected happens on the server.

Possible reasons:

- Database failure
- Server misconfiguration
- Missing environment variables

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

- Email addresses must be unique (no duplicate accounts)
- Passwords are securely hashed before storage
- The returned token should be stored securely on the client side
- Never expose `JWT_SECRET` publicly

---

# 📎 Summary

The `/users/register` endpoint:

✔ Validates incoming data
✔ Secures user passwords
✔ Stores user information
✔ Generates authentication token
✔ Returns user data and access token

This endpoint is the foundation of the application's authentication system.
