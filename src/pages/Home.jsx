import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState(()=> {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];

  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  
  
  
  const [filter, setFilter]= useState("all")

  const filteredTodos= todos.filter(todo=> {
    if(filter === "active") return !todo.done;
    if(filter === "completed") return todo.done;
    return true;
  })

  const addTodo = (text) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, done: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",

      }}
      >
        <div
          style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "12px",
        }}
        >
        
          {/* Filters */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <button
              style={{borderRadius: "50px",
                border: "none",
                padding: "6px 16px",
                backgroundColor: "rgb(212, 254, 249)",
                cursor: "pointer",}}
              onClick={() => setFilter("all")}
            >
              All
            </button>
    
            <button
              style={{borderRadius: "50px",
                border: "none",
                padding: "6px 16px",
                backgroundColor: "rgb(212, 254, 249)",
                cursor: "pointer",}}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
    
            <button
              style={{borderRadius: "50px",
                border: "none",
                padding: "6px 16px",
                backgroundColor: "rgb(212, 254, 249)",
                cursor: "pointer",}}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
    
          {/* Title */}
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Todo App
          </h1>
    
          {/* Input */}
          <TodoInput addTodo={addTodo} />
    
          {/* List */}
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
      
    );
  }
    
     
  
  

export default Home;
