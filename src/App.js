import './App.css';
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import TodoList from './Components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <Sidebar setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
