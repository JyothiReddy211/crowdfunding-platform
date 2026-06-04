# Crowdfunding Platform

A full-stack crowdfunding platform that allows users to create fundraising campaigns, manage projects, and receive donations from supporters.

## Features

### Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### Campaign Management

* Create Campaign
* View All Campaigns
* View Campaign Details
* Edit Campaign
* Delete Campaign
* Search Campaigns

### Donations

* Donate to Campaigns
* Donation History Tracking
* Campaign Progress Tracking
* Prevent Donations After Target is Reached

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)

---

# Project Structure

```bash
crowdfunding-platform
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/JyothiReddy211/crowdfunding-platform.git
```

```bash
cd crowdfunding-platform
```

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Start backend:

```bash
npm run dev
```

## Frontend Setup

Open a new terminal.

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

Backend runs on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

## Campaigns

```http
GET    /api/campaigns
GET    /api/campaigns/:id
POST   /api/campaigns
PUT    /api/campaigns/:id
DELETE /api/campaigns/:id
GET    /api/campaigns/my
```
## Donations

```http
POST /api/donations
GET  /api/donations/:campaignId
```
---
# Future Enhancements
* Payment Gateway Integration (Razorpay/Stripe)
* Campaign Image Uploads
* User Profiles
* Campaign Categories
* Email Notifications
* Admin Dashboard
---
<img width="929" height="392" alt="Screenshot 2026-06-04 215813" src="https://github.com/user-attachments/assets/2c60090e-d60f-4b12-be13-23d17ddbbe2a" />

<img width="594" height="407" alt="Screenshot 2026-06-04 215802" src="https://github.com/user-attachments/assets/05dca68d-c51d-40b0-8f9d-79ab6ec4494c" />

<img width="864" height="417" alt="Screenshot 2026-06-04 215740" src="https://github.com/user-attachments/assets/18990c77-5f27-4f7d-b229-5aa00c40944b" />

<img width="851" height="376" alt="image" src="https://github.com/user-attachments/assets/d265f229-16c3-44dd-a120-95b4e45d9356" />


# Author

Jyothi Reddy

GitHub:
https://github.com/JyothiReddy211

