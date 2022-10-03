import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid"
import "../stylesheets/Form.css";

function Form(props) {
    const [newLink, setNewLink] = useState("");

    const handleChange = (e) => {
      setNewLink(e.target.value)
    }

    const handleSend = (e)=> {
        e.preventDefault();

        const newLinks = {
          id: uuidv4(),
          title: newLink
          // URL: newLink,
        }
        props.onSubmit(newLinks)
        // localStorage.setItem("link", newLinkTitle);
    }
  return (
    <div className="main-container">
      <form onSubmit={handleSend} className="form-container">
        <label>Descriptive Title</label>
        <input placeholder="Title" 
        type="text" 
        className="form-title" 
        onChange={handleChange} />
        {/* <label>Link URL</label>
        <input placeholder="URL" type="url" className="form-content" onChange={handleChange} /> */}
        {/* <textarea rows="6" className="form-content" placeholder="Sing your song here..."></textarea> */}
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
}

export default Form;
