const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Crowdfunding API Running");
});
const donationRoutes =
require("./routes/donationRoutes");
const campaignRoutes =
require("./routes/campaignRoutes");
const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const { protect } = require("./middleware/authMiddleware");

app.get("/api/test", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user
  });
});
app.use("/api/campaigns", campaignRoutes);
app.use("/api/donations", donationRoutes);