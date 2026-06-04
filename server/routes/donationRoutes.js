const express = require("express");

const router = express.Router();

const {
  donateToCampaign,
  getCampaignDonations
} = require("../controllers/donationController");

const {
  protect
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  donateToCampaign
);
router.get(
  "/:campaignId",
  getCampaignDonations
);
module.exports = router;