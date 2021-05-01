import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {

   const { content, id } = props;

   const [isActive, setActive] = useState("false");
   const checkList = () => {
      setActive(!isActive);
   }
   let activity = isActive ? "unchecked" : "checked";

   return (
      <div className={activity + " mb-2 todo-item"} onClick={checkList}>
         <span>{content}</span>
         <button className="d-inline btn btn-danger delete-button float-right" onClick={() => props.delete(id)}>
            Sil
      </button>
      </div >
   );
}

export default Todo;
