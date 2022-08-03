import React, {useState} from "react";
import "../stylesheets/Form.css";

function Form() {
    const [newLinkTitle, setNewLinkTitle] = useState() 
    const handleSubmit = (e)=> {
        e.preventDefault();
        localStorage.setItem("hello", "yeah");
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
        <input placeholder="URL" itemType="url" className="form-content" />
        <button className="form-btn" onClick={()=> alert(newLinkTitle)}>Add</button>
      </form>
    </div>
  );
}

export default Form;
