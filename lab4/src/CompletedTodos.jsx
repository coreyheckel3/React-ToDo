const CompletedtodoList = ({ todoList, toggleCompleted }) => {
  return (
    <div>
      {todoList.map(todo => todo.completed && (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>Due Date: {todo.due}</p>
          <p>Completed: {todo.completed.toString()}</p>
          <button onClick={() => toggleCompleted(todo)}>Mark Incomplete</button>
        </div>
      ))}
    </div>
  );
};

export default CompletedtodoList;