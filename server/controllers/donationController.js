const Donation = require("../models/Donation");
const Campaign = require("../models/Campaign");

const donateToCampaign = async (req, res) => {
  try {
    const { campaignId, amount } = req.body;

    const campaign = await Campaign.findById(campaignId);

    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
      });
    }

    // Amount Validation
    if (Number(amount) <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0",
      });
    }

    // Deadline Validation
    if (new Date() > campaign.deadline) {
      return res.status(400).json({
        message: "Campaign deadline has passed",
      });
    }

    const donation = await Donation.create({
      donor: req.user.id,
      campaign: campaignId,
      amount: Number(amount),
    });

    campaign.amountRaised =
      Number(campaign.amountRaised) +
      Number(amount);

    await campaign.save();

    res.status(201).json({
      message: "Donation successful",
      donation,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCampaignDonations = async (req, res) => {
  try {
    const donations = await Donation.find({
      campaign: req.params.campaignId,
    }).populate("donor", "name email");

    res.status(200).json(donations);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  donateToCampaign,
  getCampaignDonations,
};