import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  if (todos.length === 0) {
    return <p style={{textAlign:"center"}}> برنامه تنظیم شده ای ندارید👀</p>;
  }

  return (
    <div style={{display:"grid", justifyContent:"center", fontWeight:"bold" }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
