import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form
        className={`create-note ${
          props.pushOffCreateArea ? "push-canvas" : "create-note"
        }`}
      >
        {isExpanded && (
          <input
            style={{ padding: "10px, 15px" }}
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          style={{ padding: "12px, 16px" }}
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
