import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SideBar from "./SideBar";
// import AddIcon from "@mui/icons-material/Add";

function App() {
  const [items, setItems] = useState([]);
  const [showSidebar, setSidebar] = useState(true);
  function deleteNote(id) {
    // console.log(id, "item Deleted");
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function sidebarExpand(bool) {
    setSidebar(bool);
    console.log(showSidebar);
  }

  function addNote(newNote) {
    console.log(newNote);
    setItems((prevItems) => {
      return [...prevItems, newNote];
    });
    console.log(items);
  }
  return (
    <div>
      <Header onMenuClick={sidebarExpand} />
      <SideBar showSidebar={showSidebar} />
      <div className={`push-canvas ${showSidebar ? "active" : ""}`}>
        <CreateArea pushOffCreateArea={showSidebar} onAdd={addNote} />
        {items.map((item, index) => {
          return (
            <Note
              onDelete={deleteNote}
              key={index}
              id={index}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
