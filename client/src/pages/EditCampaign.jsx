import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function EditCampaign() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await API.get(
          `/campaigns/${id}`
        );

        setFormData({
          title: res.data.title,
          description:
            res.data.description,
          category:
            res.data.category || "",
          targetAmount:
            res.data.targetAmount,
          deadline:
            res.data.deadline
              ?.split("T")[0],
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await API.put(
        `/campaigns/${id}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Campaign Updated"
      );

      navigate(
        "/my-campaigns"
      );

    } catch (error) {
      alert(
        error.response?.data
          ?.message
      );
    }
  };

  return (
    <div className="container py-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Edit Campaign
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
        >

          <input
            type="text"
            name="title"
            className="form-control mb-3"
            value={
              formData.title
            }
            onChange={
              handleChange
            }
          />

          <textarea
            name="description"
            className="form-control mb-3"
            rows="4"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
          />

          <select
            name="category"
            className="form-control mb-3"
            value={
              formData.category
            }
            onChange={
              handleChange
            }
            required
          >
            <option value="">
              Select a category
            </option>
            {campaignCategories.map(
              (category) => (
                <option
                  value={category}
                  key={category}
                >
                  {category}
                </option>
              )
            )}
          </select>

          <input
            type="number"
            name="targetAmount"
            className="form-control mb-3"
            value={
              formData.targetAmount
            }
            onChange={
              handleChange
            }
          />

          <input
            type="date"
            name="deadline"
            className="form-control mb-3"
            value={
              formData.deadline
            }
            onChange={
              handleChange
            }
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Update Campaign
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditCampaign;
