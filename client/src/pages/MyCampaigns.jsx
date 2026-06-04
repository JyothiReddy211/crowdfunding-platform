import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
function MyCampaigns() {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.get(
        "/campaigns/my",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setCampaigns(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleDelete = async (
    id
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      const confirmDelete =
        window.confirm(
          "Delete this campaign?"
        );

      if (!confirmDelete) return;

      await API.delete(
        `/campaigns/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Campaign Deleted"
      );

      fetchCampaigns();

    } catch (error) {
      alert(
        error.response?.data
          ?.message
      );
    }
  };

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        My Campaigns
      </h1>

      <div className="row">

        {campaigns.map(
          (campaign) => (
            <div
              key={campaign._id}
              className="col-md-6 col-lg-4"
            >
              <div className="card shadow-sm mb-4">

                <div className="card-body">

                  <h5>
                    {campaign.title}
                  </h5>

                  <p>
                    {
                      campaign.description
                    }
                  </p>

                  <p>
                    ₹
                    {
                      campaign.amountRaised
                    }
                    {" "}/
                    ₹
                    {
                      campaign.targetAmount
                    }
                  </p>
<Link
  to={`/edit-campaign/${campaign._id}`}
  className="btn btn-warning me-2"
>
  Edit
</Link>

<button
  className="btn btn-danger"
  onClick={() =>
    handleDelete(
      campaign._id
    )
  }
>
  Delete
</button>
            

                </div>

              </div>
            </div>
          )
        )}

      </div>

    </div>
  );
}

export default MyCampaigns;