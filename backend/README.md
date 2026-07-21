# MERN E-Commerce Backend API

A production-ready backend for an E-Commerce application built using the MERN stack. This project provides secure authentication, product management, order processing, payment integration, image upload, reviews, wishlist, cart management.

---

## Features

- JWT Authentication & Authorization
- User & Admin Roles
- Category Management
- Product CRUD
- Product Search
- Product Filter
- Product Sorting
- Product Pagination
- Featured Products
- Latest Products
- Related Products
- Product Reviews & Ratings
- Shopping Cart
- Wishlist
- Order Management
- Razorpay Payment Integration
- Cloudinary Image Upload
- Global Error Handling
- MongoDB Database

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Cloudinary
- Razorpay
- bcryptjs

---

## Project Structure

backend/
|
|-- config/
|-- controllers/
|-- middleware/
|-- models/
|-- routes/
|-- uploads/
|-- .env.example
|-- .gitignore
|-- package.json
|-- server.js

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=
MONGO_URI=
JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

Run Project

```bash
npm run dev
```

```

## Main API Routes

Authentication

```

POST /api/auth/register
POST /api/auth/login
```

Category

```
POST /api/categories
GET /api/categories
DELETE /api/categories/:id
```

Product

```
POST /api/products
GET /api/products
GET /api/products/:id
DELETE /api/products/:id

```

Cart

```
POST /api/cart
GET /api/cart
PUT /api/cart/:id
DELETE /api/cart/:id

```

Wishlist

```
POST /api/wishlist
GET /api/wishlist
DELETE /api/wishlist/:id

```

Orders

```
POST /api/orders
GET /api/orders
PUT /api/orders/:id

```

Payment

```
POST /api/payment/create-order
POST /api/payment/verify

```

---

## Author

Ayush Singh

MCA Student

MERN Stack Developer


GitHub: https://github.com/Ayush0618singh
