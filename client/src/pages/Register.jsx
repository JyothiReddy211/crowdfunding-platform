import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      const res = await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      console.log(res.data);

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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
          width: "450px",
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
            Create Account
          </h1>

          <p className="text-muted">
            Join CrowdFund and start making
            a difference.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-3">

          <span className="text-muted">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ms-2 text-decoration-none fw-bold"
          >
            Login
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Register;