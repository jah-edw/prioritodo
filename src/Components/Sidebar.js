import '../App.css'
import Form from './Form'
function Sidebar({ setTodoList }) {
  return (
    <div className="sidebar">
      <h1>add a todo</h1>
      <Form setTodoList={setTodoList} />

    </div>
  )
}

export default Sidebar;


