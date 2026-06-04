import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        <Link
  className="navbar-brand fw-bold fs-3 text-danger"
  to="/"
>
  CROWD FUNDING
</Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link
            className="nav-link"
            to="/create"
          >
            Create Campaign
          </Link>

          <Link
            className="nav-link"
            to="/my-campaigns"
          >
            My Campaigns
          </Link>

          {!token ? (
            <>
              <Link
                className="nav-link"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="nav-link"
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              className="btn btn-danger ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;