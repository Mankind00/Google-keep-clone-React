import React, { useState } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import MenuIcon from "@mui/icons-material/Menu";

function Header(props) {
  const [sidebarIsExpand, setSidebar] = useState(false);

  function handleClick() {
    // if (sidebarIsExpand === false) {
    //   setSidebar(true);
    //   props.onMenuClick(sidebarIsExpand);
    // } else {
    //   setSidebar(false);
    //   props.onMenuClick(sidebarIsExpand);
    // }
    setSidebar((prevValue) => {
      return !prevValue;
    });
    props.onMenuClick(sidebarIsExpand);
    console.log(sidebarIsExpand);
  }

  return (
    <header>
      <MenuIcon
        onClick={handleClick}
        className="sidebar-btn"
        style={{ marginRight: "20px" }}
      />
      <HighlightIcon
        style={{
          backgroundColor: "orange",
          marginRight: "8px",
          paddingBottom: "5px",
          fontSize: "30px",
          borderRadius: "5px",
        }}
      />
      <h1>Keep</h1>
    </header>
  );
}

export default Header;
