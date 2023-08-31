import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import "./common.css";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [smallHeaderVisible, setSmallHeaderVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleSmallHeader = () => {
    setSmallHeaderVisible(!smallHeaderVisible);
  };

  return (
    <div>
      {screenWidth > 768 ? (
        <header className={`header  ${collapsed ? "collapsed " : ""}`}>
          <h1>THE New Work TIMES</h1>
          <nav>
            <ul>
              <li>
                <Link to="/job-listings">Job Listings</Link>
              </li>
              <li>
                <Link to="/employer-dashboard">Employer Dashboard</Link>
              </li>
              <li>
                <Link to="/candidate-dashboard">Candidate Dashboard</Link>
              </li>
              <li>
                <Link to="/auth">
                  <FaUser />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className="HeaderSmall">
          <h1>THE NEW WORK TIMES</h1>
          <button
            className="small-header-toggle-button"
            onClick={handleToggleSmallHeader}>
            <FaBars />
          </button>
          {smallHeaderVisible && (
            <nav className="small-header">
              <h1>THE New Work TIMES</h1>
              <ul>
                <li>
                  <Link to="/job-listings">Job Listings</Link>
                </li>
                <li>
                  <Link to="/employer-dashboard">Employer Dashboard</Link>
                </li>
                <li>
                  <Link to="/candidate-dashboard">Candidate Dashboard</Link>
                </li>
                <li>
                  <Link to="/auth">
                    <FaUser />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
      )}
    </div>
  );
};

export default Header;
