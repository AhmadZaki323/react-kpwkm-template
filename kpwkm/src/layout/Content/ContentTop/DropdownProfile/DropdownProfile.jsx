import { AiFillSetting } from "react-icons/ai";
// import { iconsImgs } from "../../../utils/images";
import "./DropdownProfile.css";
import { Dropdown, Space } from "antd";
import { MdLogout } from "react-icons/md";
import { DownOutlined } from "@ant-design/icons";
import { FaUserCircle } from "react-icons/fa";

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
          <FaUserCircle />
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

const DropdownProfile = () => {
  return (
    <div className={`dropdown ${open ? "active" : "inactive"}`}>
      <div className="profile-icon">
        <ul className="profile-container">
          <li>hi</li>
          <li>hello</li>

          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownProfile;

// function Profileimg(firstName, lastName) {
//   if (!firstName || !lastName) return "?"; // Return a placeholder if names are not provided
//   var initials = firstName.charAt(0) + lastName.charAt(0);
//   return initials.toUpperCase(); // Return the initials in uppercase
// }
