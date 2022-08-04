import React, {useState} from "react";
import "../stylesheets/Form.css";

function Form() {
    const [newLinkTitle, setNewLinkTitle] = useState() 
    const handleSubmit = (e)=> {
        e.preventDefault();
        localStorage.setItem("link", newLinkTitle);
    }
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>Descriptive Title</label>
        <input placeholder="Título" 
        type="text" 
        className="form-title" 
        onChange={(e)=> setNewLinkTitle(e.target.value)} />
        <label>Link URL</label>
        <input placeholder="URL" type="url" className="form-content" />
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
}

export default Form;
