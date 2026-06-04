const Campaign = require("../models/Campaign");

const createCampaign = async (req, res) => {
  try {
    const {
      title,
      description,
      targetAmount,
      deadline
    } = req.body;

    const campaign = await Campaign.create({
      title,
      description,
      targetAmount,
      deadline,

      amountRaised: 0,

      creator: req.user.id
    });

    res.status(201).json(campaign);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getCampaigns = async (req, res) => {
  try {

    const search = req.query.search || "";

    const campaigns = await Campaign.find({
      title: {
        $regex: search,
        $options: "i"
      }
    })
    .populate("creator", "name email");

    res.status(200).json(campaigns);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getCampaignById = async (req, res) => {
  try {
    const campaign =
await Campaign.findById(req.params.id)
.populate("creator", "name email");

    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found"
      });
    }
    const campaignObj = campaign.toObject();

campaignObj.progress =
(
  campaign.amountRaised /
  campaign.targetAmount
) * 100;
    res.status(200).json(campaignObj);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const updateCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(
      req.params.id
    );

    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found"
      });
    }

    // Ownership Check
    if (
      campaign.creator.toString() !==
      req.user.id
    ) {
      return res.status(403).json({
        message: "Not authorized"
      });
    }

    const updatedCampaign =
      await Campaign.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

    res.status(200).json(updatedCampaign);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(
      req.params.id
    );

    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found"
      });
    }

    // Ownership Check
    if (
      campaign.creator.toString() !==
      req.user.id
    ) {
      return res.status(403).json({
        message: "Not authorized"
      });
    }

    await Campaign.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Campaign deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getMyCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      creator: req.user.id
    });

    res.status(200).json(campaigns);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  createCampaign,
  getCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
  getMyCampaigns
};