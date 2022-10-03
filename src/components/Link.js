import React from "react";
import "../stylesheets/Table.css";
import "../stylesheets/Link.css";
import { FaTrash } from "react-icons/fa";

function Link({ id, text, url, deleteTask }) {
  return (
    <tr>
      <td className="todo-txt">
        <a href={url} target="_blank" rel="noreferrer">
          hello babe
        </a>
      </td>
      <td className="todo-container-icons">
        <FaTrash  onClick={() => deleteTask(id)} className="todo-icon" />
        <FaTrash  onClick={() => deleteTask(id)} className="todo-icon" />
      </td>
    </tr>
  );
}

export default Link;
