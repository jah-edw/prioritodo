import Todo from "./Todo";
import "../App.css";

function TodoList(props) {
  const { todoList, setTodoList } = props;
  const sortedList = todoList.sort((a, b) => a.priority - b.priority);

  console.log(sortedList);
  return (
    <div className="todoListContainer">
      <h1 className="todoListTitle">upcomings</h1>
      {sortedList.map((item, index) => {
        {
          console.log(item);
        }
        return <Todo key={item.todo} item={item} setTodoList={setTodoList} />;
      })}
    </div>
  );
}

export default TodoList;
