import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    const syncAuthState = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", syncAuthState);
    window.addEventListener("auth-change", syncAuthState);

    return () => {
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener("auth-change", syncAuthState);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("auth-change"));
    closeMenus();
    window.location.href = "/";
  };

  const navClass = ({ isActive }) =>
    `nav-link-modern${isActive ? " active" : ""}`;

  return (
    <header className={`nav-shell${menuOpen ? " menu-open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand-logo" to="/" onClick={closeMenus}>
          <span className="brand-mark" aria-hidden="true">
            CF
          </span>
          <span>CrowdFund</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink className={navClass} to="/" onClick={closeMenus}>
            Home
          </NavLink>
          <NavLink className={navClass} to="/create" onClick={closeMenus}>
            Create Campaign
          </NavLink>
          <NavLink className={navClass} to="/my-campaigns" onClick={closeMenus}>
            My Campaigns
          </NavLink>
        </nav>

        <div className="nav-actions">
          {!token ? (
            <>
              <Link className="btn-ghost-brand" to="/login" onClick={closeMenus}>
                Login
              </Link>
              <Link className="btn-brand" to="/register" onClick={closeMenus}>
                Register
              </Link>
            </>
          ) : (
            <div className="user-menu">
              <button
                className="user-menu-toggle"
                type="button"
                aria-expanded={userMenuOpen}
                onClick={() => setUserMenuOpen((current) => !current)}
              >
                <span className="avatar-dot" aria-hidden="true">
                  U
                </span>
                Account
              </button>

              {userMenuOpen && (
                <div className="user-dropdown">
                  <Link to="/my-campaigns" onClick={closeMenus}>
                    My Campaigns
                  </Link>
                  <Link to="/create" onClick={closeMenus}>
                    Start a Campaign
                  </Link>
                  <button
                    className="dropdown-button"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="hamburger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
