import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function CampaignDetails() {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);
  const [amount, setAmount] = useState("");
  const [donations, setDonations] = useState([]);

  const handleDonate = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await API.post(
        "/donations",
        {
          campaignId: campaign._id,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Donation Successful");
      window.location.reload();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Donation Failed"
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignRes = await API.get(
          `/campaigns/${id}`
        );

        setCampaign(campaignRes.data);

        const donationRes = await API.get(
          `/donations/${id}`
        );

        setDonations(donationRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!campaign) {
    return <h2>Loading...</h2>;
  }

  const progress =
    (campaign.amountRaised /
      campaign.targetAmount) *
    100;

  const isFunded =
    campaign.amountRaised >=
    campaign.targetAmount;

  return (
    <div className="container py-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h1 className="fw-bold">
            {campaign.title}
          </h1>

          <p className="text-muted">
            {campaign.description}
          </p>

          <h4 className="mt-4">
            ₹{campaign.amountRaised}
            {" "}raised of ₹
            {campaign.targetAmount}
          </h4>

          <div className="progress mb-3">
            <div
              className="progress-bar"
              style={{
                width: `${Math.min(
                  progress,
                  100
                )}%`,
              }}
            >
              {progress.toFixed(1)}%
            </div>
          </div>

          <hr />

          <h3>
            Donate to this Campaign
          </h3>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

          <button
            className="btn btn-success mt-3"
            disabled={isFunded}
            onClick={handleDonate}
          >
            {isFunded
              ? "Campaign Funded"
              : "Donate"}
          </button>

          <hr className="my-4" />

          <h3>Recent Donations</h3>

          {donations.length === 0 ? (
            <p>No donations yet</p>
          ) : (
            donations.map(
              (donation) => (
                <div
                  key={donation._id}
                  className="card p-2 mb-2"
                >
                  <strong>
                    {
                      donation.donor
                        ?.name
                    }
                  </strong>

                  <div>
                    ₹
                    {
                      donation.amount
                    }
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;