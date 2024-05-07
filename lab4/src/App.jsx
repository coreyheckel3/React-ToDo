import { useState } from 'react'
import TodoList from './TodoList';
import CompletedTodos from './CompletedTodos';
import './App.css';

function App() {
  const [todoList, setTodos] = useState([
    {
    id: 1,
    title: 'Pay cable bill',
    description: 'Pay the cable bill by the 15th of the month',
    due: '3/15/2024',
    completed: false
   },
   {
    id: 2,
    title: 'Pay water bill',
    description: 'Pay the water bill by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 3,
    title: 'Grocery shopping',
    description: 'Buy groceries by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 4,
    title: 'Get a haircut',
    description: 'Get a haircut by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 5,
    title: 'Finish Lab 4',
    description: 'Finish Lab 4 by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 6,
    title: 'Buy a gift for girlfriend',
    description: 'Buy a gift by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 7,
    title: 'Call Mom',
    description: 'Call mom by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 8,
    title: 'Call Dad',
    description: 'Call Dad by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 9,
    title: 'Get lunch with brother',
    description: 'Get lunch with brother by the 15th of the month',
    due: '3/15/2023',
    completed: false
   },
   {
    id: 10,
    title: 'Get lunch with sister',
    description: 'Get lunch with sister by the 15th of the month',
    due: '3/15/2023',
    completed: false
   }
])

const deleteTodo = (id) => {
  setTodos(prevState => prevState.filter(state => state.id !==id))
}

const toggleCompleted = (todo) => {
const i = todoList.findIndex((state) => state.id === todo.id)
  if (i !== -1) 
  {
    const updatelist = [...todoList]
    updatelist[i] = { ...todo, completed: !todo.completed }
    setTodos(updatelist)
  }
}

  return (
    <>
      <div>
      <h1>Todo:</h1>
      <TodoList 
       todoList={todoList} 
       toggleCompleted={toggleCompleted} 
       deleteTodo={deleteTodo} 
       />
      <CompletedTodos
       todoList={todoList.filter((todo) => todo.completed)} 
       toggleCompleted={toggleCompleted} 
       />
    </div>
    </>
  )
}

export default App
