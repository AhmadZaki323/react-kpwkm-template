import { useContext, useState, useRef, useEffect } from "react";
import "./ContentTop.css";
import { SidebarContext } from "../../../context/sidebarContext";
import { iconsImgs } from "../../../utils/images";
import { userProfile } from "../../../data/data";
import Search_data from "../../../assets/Search_data";
import { keepTheme } from "../../../utils/theme";
import { FaUserCircle } from "react-icons/fa";

// Icons import
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Space } from "antd";
import { AiFillAppstore, AiFillAndroid, AiFillSetting } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { SearchBar } from "./Search_component/SearchBar";
import { SearchResultsList } from "./Search_component/SearchResultsList";
// import Toggle from "./Darkmode_component/Toggle";
import { DarkModeToggle } from "./Darkmode_component/DarkModeToggle";
import DropdownProfile from "./DropdownProfile/DropdownProfile";
// import { Dropdown } from "flowbite-react";

//Search bar function
const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((song) => song.name.includes(query));
};

// Data for Top icons
const profile_item = [
  // {
  //   label: (
  //     <img src="/src/assets/images/person_one.jpg" className="profile_icon" />
  //   ),
  //   key: "0",
  // },
  {
    label: (
      <>
        <a href="/customers">
          <img src={iconsImgs.menu} className="profile_icon" />
          Profile
        </a>
      </>
    ),
    key: "1",
  },
  {
    label: (
      <a href="/packagelist">
        <AiFillSetting className="profile_icon" style={{ color: "gray" }} />
        Setting
      </a>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a href="/packagelist">
        <MdLogout className="profile_icon" />
        Sign Out
      </a>
    ),
    key: "3",
  },
];

const notification_item = [
  {
    // icon: iconsImgs.alert,
    key: "01",
    type: "group",
    label: "Notification",

    children: [
      {
        type: "divider",
      },
      {
        key: "1-1",
        label: (
          <a href="/packagelist">
            <img src={iconsImgs.bell} className="profile_icon" />
            Notification 1
          </a>
        ),
      },
      {
        type: "divider",
      },
      {
        key: "1-2",
        label: (
          <a href="/packagelist">
            <img src={iconsImgs.bell} className="profile_icon" />
            Notification 2
          </a>
        ),
      },
    ],
  },
  // {
  //   type: "divider",
  // },
  // {
  //   label: (
  //     <a href="/packagelist">
  //       <img src={iconsImgs.bell} className="profile_icon" />
  //       Notification 2
  //     </a>
  //   ),
  //   key: "1",
  // },
  // {
  //   type: "divider",
  // },

  // {
  //   label: (
  //     <a href="/packagelist">
  //       <img src={iconsImgs.bell} className="profile_icon" />
  //       Notification 2
  //     </a>
  //   ),
  //   key: "2",
  // },
];
const app_item = [
  {
    key: "1",
    type: "group",
    label: "Switch To",
    children: [
      {
        key: "1-1",
        label: (
          <a href="/packagelist">
            <AiFillAndroid
              className="profile_icon"
              style={{ color: "green" }}
            />
            1st App
          </a>
        ),
      },
      {
        key: "1-2",
        label: (
          <a href="/packagelist">
            <AiFillAndroid
              className="profile_icon"
              style={{ color: "green" }}
            />
            2nd App
          </a>
        ),
      },
    ],
  },
  { type: "divider" },
  // This is for sub menu code
  // {
  //   key: "2",
  //   label: "sub menu",
  //   children: [
  //     {
  //       key: "2-1",
  //       label: "3rd menu item",
  //     },
  //     {
  //       key: "2-2",
  //       label: "4th menu item",
  //     },
  //   ],
  // },
  {
    key: "2",
    type: "group",
    label: "Discover",
    children: [
      {
        key: "2-1",
        label: (
          <a href="/packagelist">
            <img
              src={iconsImgs.plane}
              className="profile_icon"
              style={{ color: "purple" }}
            />
            Mailjet
          </a>
        ),
      },
      {
        key: "2-2",
        label: (
          <a href="/packagelist">
            <img src={iconsImgs.bell} className="profile_icon" />
            Email
          </a>
        ),
      },
    ],
  },
];

const ContentTop = () => {
  // Toggle open sidebar and popup
  const { toggleSidebar } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // 1st search bar state
  const [query, setQuery] = useState("");

  const { tracks } = Search_data;
  const { items } = tracks;
  // items looks like this: [{name: 'name1'}, {name: 'name2'}]

  const filteredItems = getFilteredItems(query, items);

  //2nd search bar state (right now using this one)
  const [results, setResults] = useState([]);

  // Toggle button
  // const [className, setClassName] = useState("theme-dark");

  // useScrollToTop();
  // useEffect(() => {
  //   keepTheme(setClassName);
  // }, [setClassName]);

  // Dropdown profile
  const [openProfile, setOpenProfile] = useState(false);
  const [openHover, setOpenHover] = useState(true);

  // close profile
  const openList = () => setOpenProfile(true);
  const closeList = () => setOpenProfile(false);

  // close when click anywhere
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="main-content-top">
        <div className="content-top-left">
          <button
            type="button"
            className="sidebar-toggler"
            onClick={() => toggleSidebar()}
          >
            <img src={iconsImgs.menu} alt="" />
          </button>

          {/* Searchbar-Icon */}
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </div>
        </div>

        {/* Darkmode-Icon */}
        <div className="content-top-btns">
          <div className="darkmode-icon">
            <button className="darkicon-btn" onClick={togglePopup}>
              <DarkModeToggle />
            </button>
            {/* <Toggle setClassName={props.setClassName} /> */}
          </div>

          {/* Profile-Icon Items */}
          <div>
            <button className="icon-btn" onClick={openList}>
              <Avatar style={{ backgroundColor: "green", color: "white" }}>
                {Profileimg(userProfile[0].firstname, userProfile[0].lastname)}
              </Avatar>
            </button>
            <div className="dropdown-profile">
              <div className="profile-icon">
                <ul
                  className={`profile-container ${openProfile ? "active" : ""}`}
                  ref={menuRef}
                >
                  <div className="close-btn">
                    <IoCloseOutline
                      onClick={closeList}
                      className="close-icon"
                    />
                  </div>
                  <li>{userProfile[0].email}</li>
                  <li>
                    <span className="profile-pic">
                      <FaUserCircle
                        style={{ fontSize: "90px", color: "gray" }}
                      />
                    </span>
                  </li>
                  <li>Hi! {userProfile[0].name}</li>
                  <li>
                    <button className="manage-profile">Manage Profile</button>
                  </li>

                  <li>
                    <button
                      className="optionprofile-btn"
                      onClick={() => {
                        setOpenHover(!openHover);
                      }}

                      // onMouseEnter={() => setOpenHover(false)}
                      // onMouseLeave={() => setOpenHover(true)}
                    >
                      <div className="profileoption-title">
                        Show more accounts
                      </div>
                      <li
                        className={`hover-dropdown ${
                          openHover ? "active" : ""
                        }`}
                      >
                        <div className="hoverdropdown-content">
                          <a href="#">Account 1</a>
                          <a href="#">Account 2</a>
                          <a href="#">Account 3</a>
                        </div>
                      </li>
                    </button>
                  </li>
                  <li></li>

                  {/* <li>
                    <Dropdown
                      menu={{
                        items: profile_item,
                        style: { marginTop: "20px" },
                      }}
                      trigger={["click"]}
                      style={{ marginTop: "60px" }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space></Space>
                        <DownOutlined style={{ color: "black" }} />
                      </a>
                    </Dropdown>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DropdownProfile /> */}
    </>
  );
};

export default ContentTop;

function Profileimg(firstName, lastName) {
  if (!firstName || !lastName) return "?"; // Return a placeholder if names are not provided
  var initials = firstName.charAt(0) + lastName.charAt(0);
  return initials.toUpperCase(); // Return the initials in uppercase
}
