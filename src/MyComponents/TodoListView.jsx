import Todo from "./Todo";
import React from "react";

const TodoListView = (props) => {
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            deleteTodoHandler={props.deleteTodoHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoListView;