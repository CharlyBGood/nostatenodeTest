import React from "react";
import "../stylesheets/Form.css";

function Form() {
  return (
    <div className="main-container">
      <div className="form-container">
        <label>Descriptive Title</label>
        <input placeholder="Título" itemType="text" className="form-title" />
        <label>Link URL</label>
        <input placeholder="URL" itemType="url" className="form-content" />
        <button className="form-btn" onClick={()=> alert('yeah cabrón!')}>Add</button>
      </div>
    </div>
  );
}

export default Form;
