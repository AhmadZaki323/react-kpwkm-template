import "./Sidebar.css";
// import { personsImgs } from "../../utils/images";
import { SidebarData, userProfile } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Sidebar1() {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img ">
          <img src="/KPWKM/KPWKM_img.jpg" alt="profile image" />
          <span className="info-name">KPWKM</span>
        </div>
        <div className="info-user-name-email"></div>
      </div>
      <nav className="navigation">
        {/* <Link to="/"></Link> */}
        {/* <ul className="nav-list"> */}
        <ul className="nav-list">
          <li className="nav-item">
            {/* to={SidebarData[0].path} */}
            <CustomLink to="/" className="nav-link">
              <img
                src={SidebarData[0].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Pendaftaran</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[1].path} className="nav-link">
              <img
                src={SidebarData[1].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Maklumat</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[2].path} className="nav-link">
              <img
                src={SidebarData[2].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">E-Kehakiman</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to={SidebarData[3].path} className="nav-link">
              <img
                src={SidebarData[3].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Maklum Balas</span>
            </CustomLink>
          </li>

          <li className="nav-item">
            <CustomLink to={SidebarData[4].path} className="nav-link">
              <img
                src={SidebarData[4].icon}
                className="nav-link-icon"
                alt={SidebarData.title}
              />
              <span className="nav-link-text">Penetapan</span>
            </CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// export default Sidebar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
