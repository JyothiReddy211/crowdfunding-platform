const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    targetAmount: {
      type: Number,
      required: true
    },

    amountRaised: {
      type: Number,
      default: 0
    },

    deadline: {
      type: Date,
      required: true
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Campaign",
  campaignSchema
);