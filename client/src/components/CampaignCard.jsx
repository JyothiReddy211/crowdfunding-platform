import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

const getDaysRemaining = (deadline) => {
  if (!deadline) return "Open";

  const today = new Date();
  const endDate = new Date(deadline);
  const diff = endDate.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (Number.isNaN(days)) return "Open";
  if (days <= 0) return "Ended";
  if (days === 1) return "1 day left";
  return `${days} days left`;
};

function CampaignCard({ campaign }) {
  const amountRaised = Number(campaign.amountRaised) || 0;
  const targetAmount = Number(campaign.targetAmount) || 0;
  const progress = targetAmount > 0 ? (amountRaised / targetAmount) * 100 : 0;
  const progressWidth = Math.min(Math.max(progress, 0), 100);
  const description = campaign.description || "No description available yet.";
  const category = campaign.category || "Other";

  return (
    <article className="campaign-card">
      <div className="campaign-image-wrap">
        <img
          className="campaign-image"
          src={campaign.image || fallbackImage}
          alt={campaign.title || "Campaign"}
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
          }}
        />
        <span className="campaign-badge">{category}</span>
      </div>

      <div className="campaign-body">
        <h3 className="campaign-title">{campaign.title}</h3>
        <p className="campaign-description">
          {description.length > 116
            ? `${description.slice(0, 116).trim()}...`
            : description}
        </p>

        <div className="campaign-progress-meta">
          <span className="campaign-money">{formatCurrency(amountRaised)}</span>
          <span className="campaign-goal">
            of {formatCurrency(targetAmount)}
          </span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Campaign funding progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progressWidth)}
        >
          <div
            className="progress-fill"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        <div className="campaign-bottom-meta">
          <span className="campaign-percent">
            {progressWidth.toFixed(0)}% funded
          </span>
          <span className="campaign-days">
            {getDaysRemaining(campaign.deadline)}
          </span>
        </div>

        <Link to={`/campaign/${campaign._id}`} className="btn-brand">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default CampaignCard;
