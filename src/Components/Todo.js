import "../App.css";
import { useState, useRef } from "react";

function Todo({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(item);

  const editInput = useRef(item.todo);

  function handleClick(event) {
    event.target.style.textDecoration
      ? event.target.style.removeProperty("text-decoration")
      : event.target.style.setProperty("text-decoration", "line-through") &&
        event.target.style.setProperty("cursor", "auto");
  }

  function makeEditable() {
    setIsEditing(true);
    setCurrentTodo(currentTodo);
  }

  function handleSubmit(event) {
    let inputText = editInput.current.value;
    setIsEditing(false);
    if (inputText !== "") setCurrentTodo({ ...currentTodo, todo: inputText });
    console.log("submit");
  }

  return (
    <>
      <div
        data-testid="todoContainerTest"
        className="todoContainer"
        onDoubleClick={() => makeEditable(item)}
        style={{
          background:
            item.priority === "0"
              ? "rgb(254,121,104,1)"
              : item.priority === "1"
              ? "rgb(251, 192, 147,1)"
              : "rgb(255, 246, 143,1)",
        }}
      >
        {isEditing ? (
          <input
            type="text"
            onMouseLeave={handleSubmit}
            ref={editInput}
            style={{
              width: "50vw",
              height: "8vh",
              left: "4vw",
              bottom: "1vw",
              background:
                item.priority === "0"
                  ? "rgb(254,121,104,1)"
                  : item.priority === "1"
                  ? "rgb(251, 192, 147,1)"
                  : "rgb(255, 246, 143,1)",
              cursor: "auto",
              borderRadius: "0.4vw",
              fontSize: "x-large",
              padding: "2vh 3vh",
              display: "block",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          ></input>
        ) : (
          <p
            onMouseDown={handleClick}
            className="todoTitle"
            data-testid="displayedTodo"
          >
            {currentTodo.todo}
          </p>
        )}
      </div>
    </>
  );
}

export default Todo;
