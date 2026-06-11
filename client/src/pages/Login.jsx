import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

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
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );
      window.dispatchEvent(new Event("auth-change"));

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
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
          width: "420px",
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
            Welcome Back
          </h1>

          <p className="text-muted">
            Login to continue your journey
          </p>
        </div>

        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="ms-2 text-decoration-none fw-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
