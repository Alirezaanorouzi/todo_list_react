import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
      <form>

        <input
        style={{  borderRadius:"50px", padding:"10px", width:"300px", border:"1px solid", backgroundColor:"rgb(211, 218, 217)"}}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        />
        <button style={{ marginLeft:"10px", width:"70px", borderRadius:"4px", borderRadius:"50px", border:"none", padding:"10px",  backgroundColor:"rgb(84, 92, 89)", color:"white"}} onClick={submitHandler}>Add</button>
        
      </form>
    </div>
  );
};

export default TodoInput;
