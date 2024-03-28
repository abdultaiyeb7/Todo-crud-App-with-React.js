import React from "react";

const Todoitems = ({ todo, onDelete }) => {
  return (
    <div>
       <h3>{todo.sno}</h3>
      <h3>{todo.title}</h3>
      <h3>{todo.desc}</h3>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
};

export default Todoitems;
