# Crowdfunding Platform

A full-stack MERN crowdfunding platform where users can register, create fundraising campaigns, manage their campaigns, and donate to causes. The frontend has been redesigned with a modern production-style UI inspired by platforms like Kickstarter, GoFundMe, Milaap, and Ketto.

## Features

### Authentication

- User registration and login
- JWT-based authentication
- Protected campaign and donation actions
- Logged-in user dropdown with logout

### Campaigns

- Create campaigns with title, description, image URL, category, target amount, and deadline
- Category classification for:
  - Education
  - Medical
  - Technology
  - Startup
  - Environment
  - Charity
  - Other
- View all campaigns
- View campaign details
- Edit and delete own campaigns
- Track raised amount, target amount, progress, and days remaining

### Donations

- Donate to campaigns
- View donation history
- Campaign progress updates after donations
- Prevent donations once the target is reached

### Modern Frontend UI

- Sticky responsive navbar
- Premium landing page
- Statistics section
- Category filters
- Featured campaign cards
- Testimonials
- Professional footer
- Skeleton loading states
- Empty states
- Responsive mobile-friendly layout
- Modern campaign cards with image, category badge, progress bar, funding percentage, and days remaining

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap
- Custom CSS design system
- Vite

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Project Structure

```bash
crowdfunding-platform/
  client/
    public/
    src/
      assets/
      components/
      pages/
      services/
      App.jsx
      index.css
      main.jsx
    package.json

  server/
    config/
    controllers/
    middleware/
    models/
    routes/
    server.js
    package.json

  README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JyothiReddy211/crowdfunding-platform.git
cd crowdfunding-platform
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
```

Start the backend:

```bash
npm run dev
```

The backend runs on:

```bash
http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs on:

```bash
http://localhost:5173
```

## API Endpoints

### Auth

```http
POST /api/auth/register
POST /api/auth/login
```

### Campaigns

```http
GET    /api/campaigns
GET    /api/campaigns/:id
GET    /api/campaigns/my
POST   /api/campaigns
PUT    /api/campaigns/:id
DELETE /api/campaigns/:id
```

### Donations

```http
POST /api/donations
GET  /api/donations/:campaignId
```

## Campaign Data

Campaigns are stored in MongoDB with fields such as:

```js
{
  title: "Medical Support Fund",
  description: "Helping a family cover urgent medical costs.",
  image: "https://images.unsplash.com/photo-example",
  category: "Medical",
  targetAmount: 250000,
  amountRaised: 0,
  deadline: "2029-10-21T00:00:00.000Z",
  creator: "USER_ID"
}
```

The `image` field stores a public image URL, not an uploaded file. Use direct public image links from sources like Unsplash, Pexels, or Cloudinary.

Avoid using Google thumbnail URLs such as `encrypted-tbn0.gstatic.com`, because they can expire or fail to load.

## Deployment

This project is structured for separate frontend and backend deployment:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

After changing backend files such as models or controllers, redeploy the Render backend so MongoDB receives the latest fields, including `category`.

After changing frontend files, redeploy the Vercel frontend.

## Build Commands

Frontend production build:

```bash
cd client
npm run build
```

Backend production start:

```bash
cd server
npm start
```

## Future Enhancements

- Real image uploads with Cloudinary or AWS S3
- Payment gateway integration with Razorpay or Stripe
- User profiles
- Admin dashboard
- Email notifications
- Advanced search and category browsing
- Donation receipts

Screenshots :
  
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

