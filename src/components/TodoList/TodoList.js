import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {

   return (
      <ul>
         {props.todos.map((todo) => {
            return (
               <li className="list-group-item">
                  <TodoItem {...todo} key={todo.id} delete={props.delete} />
               </li>
            );
         })}
      </ul>
   );
}

export default TodoList;
