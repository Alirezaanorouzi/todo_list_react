const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <ul style={{backgroundColor:"rgb(153, 160, 160) ", borderradius: "8px", marginRight:"120px"}}>
      <li className={`todo-row ${todo.done ? "done" : ""}`}>
      
      {todo.done  ? `${todo.text} ✔`: todo.text}
        
      <button  style={{position:"absolute", right:"540px",borderRadius:"50px", border:"none",  backgroundColor:"rgb(92, 245, 155)", padding:"8px"}} onClick={() => toggleTodo(todo.id)}>
        
      {todo.done ? "Undo" : "Done"}
      </button>

        <button style={{position:"absolute", right:"600px", borderRadius:"50px", border:"none",  backgroundColor:"rgb(196, 163, 162)", padding:"8px"}}  onClick={() => removeTodo(todo.id)}>X</button>
      </li>
    </ul>
  );
};

export default TodoItem;

