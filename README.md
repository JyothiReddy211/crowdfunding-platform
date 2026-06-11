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
<img width="944" height="427" alt="image" src="https://github.com/user-attachments/assets/c8cbf1d4-9963-4ca5-9c52-41b3a21bc696" />

<img width="944" height="337" alt="image" src="https://github.com/user-attachments/assets/2733a16b-695a-4056-afd0-8b209bba0d69" />

<img width="929" height="377" alt="image" src="https://github.com/user-attachments/assets/043b7fd0-3a03-4aed-aa9b-240d34bc8205" />

<img width="944" height="376" alt="image" src="https://github.com/user-attachments/assets/255e7c00-3271-4bf9-ac70-8912df4fb66f" />

<img width="943" height="380" alt="image" src="https://github.com/user-attachments/assets/c5798cb4-dc96-4aad-9bbc-08fe137f61fc" />

<img width="948" height="440" alt="image" src="https://github.com/user-attachments/assets/08eea7c9-8495-42c9-9e48-fa1b6cc4fccb" />



# Author

Jyothi Reddy

GitHub:
https://github.com/JyothiReddy211

