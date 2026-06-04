import { useEffect, useState } from "react";
import API from "../services/api";
import CampaignCard from "../components/CampaignCard";
import heroImage from "../assets/hero.png";

function Home() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await API.get("/campaigns");
        setCampaigns(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="container py-5">

      {/* Hero Section */}
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "4rem",
              color: "#0F172A"
            }}
          >
            Fund Ideas That Matter
          </h1>

          <p
            className="lead"
            style={{
              color: "#475569"
            }}
          >
            Launch campaigns, support innovative
            projects and help bring great ideas
            to life.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Explore Campaigns
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={heroImage}
            alt="Crowdfunding"
            className="img-fluid"
          />
        </div>

      </div>

      {/* Statistics */}
      <div className="row text-center my-5">

        <div className="col-md-4">
          <h2 className="fw-bold text-primary">
            {campaigns.length}
          </h2>
          <p>Active Campaigns</p>
        </div>

        <div className="col-md-4">
          <h2 className="fw-bold text-success">
            ₹
            {campaigns.reduce(
              (sum, campaign) =>
                sum + campaign.amountRaised,
              0
            )}
          </h2>
          <p>Total Raised</p>
        </div>

        <div className="col-md-4">
          <h2 className="fw-bold text-danger">
            {campaigns.length}
          </h2>
          <p>Creators</p>
        </div>

      </div>

      {/* Featured Campaigns */}
      <h2
        className="fw-bold mb-4 text-center"
        style={{
          color: "#0F172A"
        }}
      >
        Featured Campaigns
      </h2>

      <div className="row">

        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="col-lg-4 col-md-6"
          >
            <CampaignCard campaign={campaign} />
          </div>
        ))}

      </div>

      {/* How It Works */}
      <div className="mt-5">

        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#0F172A"
          }}
        >
          How It Works
        </h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <h1>🚀</h1>
              <h4>Create Campaign</h4>
              <p>
                Start your fundraising
                journey in minutes.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <h1>📢</h1>
              <h4>Share Your Story</h4>
              <p>
                Explain your idea and
                attract supporters.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <h1>💰</h1>
              <h4>Receive Donations</h4>
              <p>
                Reach your target and make
                your idea a reality.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;