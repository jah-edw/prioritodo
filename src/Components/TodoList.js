import Todo from './Todo';
import '../App.css'

function TodoList(props) {
  const { todoList, setTodoList } = props


  return (
    <div className='todoListContainer'>
      <h1 className="todoListTitle">upcoming todo's</h1>
      {
        todoList.map((item, index) => {
          return <Todo key={index} item={item} setTodoList={setTodoList} />
        })
      }
    </div>
  )
}

export default TodoList;