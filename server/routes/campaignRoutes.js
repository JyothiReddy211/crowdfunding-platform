const express = require("express");
const router = express.Router();


const {
  protect
} = require("../middleware/authMiddleware");

const {
  createCampaign,
  getCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
  getMyCampaigns
} = require("../controllers/campaignController");

router.post("/", protect, createCampaign);
router.get("/", getCampaigns);
router.get(
  "/my",
  protect,
  getMyCampaigns
);
router.get("/:id", getCampaignById);
router.put(
  "/:id",
  protect,
  updateCampaign
);
router.delete(
  "/:id",
  protect,
  deleteCampaign
);
module.exports = router;