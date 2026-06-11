import { useState } from "react";
import API from "../services/api";

const campaignCategories = [
  "Education",
  "Medical",
  "Technology",
  "Startup",
  "Environment",
  "Charity",
  "Other",
];

function CreateCampaign() {
 const [formData, setFormData] = useState({
  title: "",
  description: "",
  image: "",
  category: "",
  targetAmount: "",
  deadline: "",
});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      await API.post(
        "/campaigns",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Campaign Created Successfully"
      );

      setFormData({
  title: "",
  description: "",
  image: "",
  category: "",
  targetAmount: "",
  deadline: "",
});

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to create campaign"
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        backgroundColor: "#F8FAFC",
      }}
    >
      <div
        className="card shadow border-0 p-4"
        style={{
          width: "700px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-4">

          <h1
            className="fw-bold"
            style={{
              color: "#0F172A",
            }}
          >
            Create Campaign
          </h1>

          <p className="text-muted">
            Launch your fundraising campaign
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Campaign Title
            </label>

            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Campaign Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Description
            </label>

            <textarea
              name="description"
              rows="4"
              className="form-control"
              placeholder="Describe your campaign"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Category
            </label>

            <select
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select a category
              </option>
              {campaignCategories.map((category) => (
                <option
                  value={category}
                  key={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
  <label className="form-label">
    Campaign Image URL
  </label>

  <input
    type="text"
    name="image"
    className="form-control"
    placeholder="Paste image URL"
    value={formData.image}
    onChange={handleChange}
  />
</div>
          <div className="mb-3">
            <label className="form-label">
              Target Amount (₹)
            </label>

            <input
              type="number"
              name="targetAmount"
              className="form-control"
              placeholder="50000"
              value={formData.targetAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Deadline
            </label>

            <input
              type="date"
              name="deadline"
              className="form-control"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Create Campaign
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreateCampaign;
