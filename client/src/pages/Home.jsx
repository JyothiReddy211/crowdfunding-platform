import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import CampaignCard from "../components/CampaignCard";
import heroImage from "../assets/hero.png";

const categories = [
  { name: "Education", icon: "Ed" },
  { name: "Medical", icon: "Md" },
  { name: "Technology", icon: "Tc" },
  { name: "Startup", icon: "St" },
  { name: "Environment", icon: "En" },
  { name: "Charity", icon: "Ch" },
  { name: "Other", icon: "Ot" },
];

const testimonials = [
  {
    quote:
      "We raised the first round for our community lab faster than expected and kept every supporter updated in one place.",
    name: "Aarav Mehta",
  },
  {
    quote:
      "The campaign page made our healthcare fundraiser feel trustworthy, clear, and easy for donors to share.",
    name: "Nisha Rao",
  },
  {
    quote:
      "CrowdFund helped us turn a campus idea into a real launch with backing from people who believed in it.",
    name: "Kabir Sharma",
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

function SkeletonCampaigns() {
  return Array.from({ length: 3 }).map((_, index) => (
    <div className="skeleton-card" key={index}>
      <div className="skeleton-block" />
      <div className="skeleton-lines">
        <div className="skeleton-line" />
        <div className="skeleton-line" />
        <div className="skeleton-line short" />
      </div>
    </div>
  ));
}

function Home() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const res = await API.get("/campaigns");
        setCampaigns(res.data);
        setError("");
      } catch (fetchError) {
        console.log(fetchError);
        setError("Unable to load campaigns right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const stats = useMemo(() => {
    const totalRaised = campaigns.reduce(
      (sum, campaign) => sum + (Number(campaign.amountRaised) || 0),
      0
    );
    const creatorIds = new Set(
      campaigns
        .map((campaign) => campaign.creator?._id || campaign.creator)
        .filter(Boolean)
    );

    return {
      activeCampaigns: campaigns.length,
      totalRaised,
      creators: creatorIds.size || campaigns.length,
    };
  }, [campaigns]);

  const filteredCampaigns =
    selectedCategory === "All"
      ? campaigns
      : campaigns.filter(
          (campaign) =>
            campaign.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const featuredCampaigns = filteredCampaigns.slice(0, 6);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    document
      .getElementById("featured-campaigns")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-section">
        <div className="site-container hero-grid">
          <div>
            <span className="eyebrow">Fund ideas that move people</span>
            <h1 className="hero-title">
              Turn meaningful causes into funded realities.
            </h1>
            <p className="hero-copy">
              Launch a campaign, tell your story, and rally supporters around
              education, healthcare, startups, technology, and community impact.
            </p>

            <div className="hero-actions">
              <Link className="btn-brand" to="/create">
                Start a Campaign
              </Link>
              <a className="btn-ghost-brand" href="#featured-campaigns">
                Explore Campaigns
              </a>
            </div>

            <div className="hero-trust-row">
              <span>Secure donations</span>
              <span>Creator dashboard</span>
              <span>Real-time progress</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art-card">
              <img src={heroImage} alt="People supporting a fundraising idea" />
              <div className="hero-art-overlay">
                <strong>Community health drive</strong>
                <div className="mini-progress" aria-hidden="true">
                  <span style={{ width: "78%" }} />
                </div>
                <p className="section-copy">78% funded by 246 supporters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="site-container stats-grid">
          <div className="stat-card">
            <span className="stat-value">{stats.activeCampaigns}</span>
            <span className="stat-label">Active campaigns</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{formatCurrency(stats.totalRaised)}</span>
            <span className="stat-label">Total funds raised</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{stats.creators}</span>
            <span className="stat-label">Total creators</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-header">
            <span className="eyebrow">Campaign categories</span>
            <h2 className="section-title">Find the causes you care about.</h2>
            <p className="section-copy">
              Browse focused fundraising categories built for urgent needs,
              ambitious ideas, and long-term community projects.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <button
                className={`category-card${
                  selectedCategory === category.name ? " active" : ""
                }`}
                type="button"
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="featured-campaigns">
        <div className="site-container">
          <div className="section-header">
            <span className="eyebrow">Featured campaigns</span>
            <h2 className="section-title">
              {selectedCategory === "All"
                ? "Back stories worth believing in."
                : `${selectedCategory} campaigns`}
            </h2>
            <p className="section-copy">
              {selectedCategory === "All"
                ? "Discover live campaigns from creators and communities already building momentum."
                : `Showing campaigns listed under ${selectedCategory}.`}
            </p>
            {selectedCategory !== "All" && (
              <button
                className="category-reset"
                type="button"
                onClick={() => setSelectedCategory("All")}
              >
                Show all campaigns
              </button>
            )}
          </div>

          {error && (
            <div className="empty-state">
              <h3>Campaigns could not be loaded</h3>
              <p>{error}</p>
            </div>
          )}

          {!error && (
            <div className="campaign-grid">
              {loading ? (
                <SkeletonCampaigns />
              ) : featuredCampaigns.length > 0 ? (
                featuredCampaigns.map((campaign) => (
                  <CampaignCard campaign={campaign} key={campaign._id} />
                ))
              ) : (
                <div className="empty-state">
                  <h3>
                    {selectedCategory === "All"
                      ? "No campaigns yet"
                      : `No ${selectedCategory} campaigns yet`}
                  </h3>
                  <p>
                    {selectedCategory === "All"
                      ? "Be the first creator to launch a fundraiser and invite the community to support it."
                      : "Try another category or create the first campaign in this category."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-header">
            <span className="eyebrow">Community voices</span>
            <h2 className="section-title">Built for trust and momentum.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.name}>
                <p>{testimonial.quote}</p>
                <strong>{testimonial.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
