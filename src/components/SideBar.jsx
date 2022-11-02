import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const ulLinks = document.querySelector(".links");

function SideBar(props) {
  console.log(props.showSidebar);
  React.useEffect(() => {
    document.querySelector(".links").addEventListener("click", function (e) {
      const allList = document.querySelectorAll(".list");
      allList.forEach((list) => list.classList.remove("active"));
      const clickedList = e.target.closest(".list");
      clickedList.classList.add("active");
    });
  }, []);

  return (
    <aside className={`${props.showSidebar ? "sidebar active" : "sidebar"}`}>
      <ul className="links">
        <li className="list active">
          <a href="#">
            <span className="icon">
              <LightbulbOutlinedIcon className="material-icons" />
            </span>
            <span className="title">Notes</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <NotificationsNoneOutlinedIcon className="material-icons" />
            </span>
            <span className="title">Reminders</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <ArchiveOutlinedIcon className="material-icons" />
            </span>
            <span className="title">Archive</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <DeleteOutlineOutlinedIcon className="material-icons" />
            </span>
            <span className="title">Trash</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
