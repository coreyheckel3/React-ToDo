
function TodotodoList({todoList, deleteTodo, toggleCompleted}){
    return (
        <div>
        {todoList.map(todo => !todo.completed && (
         <div key={todo.id} className={checkPastDue(todo.due) ? 'pastDue' : ''}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p className="dueDate">Due Date: {todo.due}</p>
            <p>Completed: {todo.completed.toString()}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toggleCompleted(todo)}>Complete</button>
            </div>
            ))}
        </div>
    )
}


function checkPastDue(dueDate) {
    const currentDate = new Date()
    const dateDue = new Date(dueDate)
    return currentDate > dateDue
  }

export default TodotodoList;