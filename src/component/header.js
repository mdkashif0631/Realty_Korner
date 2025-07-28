import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [nav_bar, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowMenu(!nav_bar);
  };

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const top = headerRef.current.getBoundingClientRect().top;
        setIsSticky(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowUserMenu(false);
    navigate("/");

  };

  return (
    <>
      <div ref={headerRef} className={`headerContainer ${isSticky ? "sticky" : ""}`}>
        <div className='rk_logo'>
          <img src='../img/RealtyKornerLogo.png' alt="Logo" />
        </div>
        <div className={nav_bar ? "mobile_menu" : "web_menu"}>
          <div className="menu">
            <ul className="menu_list">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li className="dropdown">
                <span className="dropdown">Project</span>
                <ul className="dropdown_menu">
                  <li><Link to="/residential" onClick={closeMenu}>Residential</Link></li>
                  <li><Link to="/commercial" onClick={closeMenu}>Commercial</Link></li>
                </ul>
              </li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contacts" onClick={closeMenu}>Contacts</Link></li>
            </ul>
          </div>

          <div className="user_btn" style={{ position: "relative" }}>
            {isLoggedIn ? (
              <div style={{ position: "relative" }}>
                <FaUserCircle
                  style={{ fontSize: "28px", cursor: "pointer", color: "black" }}
                  title="User Menu"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                />
                {showUserMenu && (
                  <ul
                    className="user-dropdown"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "35px",
                      backgroundColor: "#fff",
                      listStyle: "none",
                      padding: "10px",
                      border: "1px solid #ccc",
                      zIndex: 1000,
                    }}
                  >
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <>
                <li><Link to="/login" onClick={closeMenu} className="btn_login">Login</Link></li>
                <li><Link to="/signup" onClick={closeMenu} className="btn_signup">Sign Up</Link></li>
              </>
            )}
          </div>
        </div>

        <div className="menu_icon">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
