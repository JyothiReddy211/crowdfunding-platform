import { Link } from "react-router-dom";

function CampaignCard({ campaign }) {

  const progress =
    (campaign.amountRaised /
      campaign.targetAmount) *
    100;

  return (
    <div className="card border-0 shadow-sm mb-4">

      <div className="card-body">

        <h5 className="fw-bold">
          {campaign.title}
        </h5>

        <p className="text-muted">
          {campaign.description}
        </p>

        <p>
          ₹{campaign.amountRaised}
          {" "}raised of{" "}
          ₹{campaign.targetAmount}
        </p>

        <div className="progress mb-3">
          <div
            className="progress-bar"
            style={{
              width: `${Math.min(progress, 100)}%`
            }}
          >
            {progress.toFixed(1)}%
          </div>
        </div>

        <Link
          to={`/campaign/${campaign._id}`}
          className="btn btn-primary w-100"
        >
          View Campaign
        </Link>

      </div>
    </div>
  );
}

export default CampaignCard;