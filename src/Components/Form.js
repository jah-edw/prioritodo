import { useState } from "react";
function Form({ setTodoList }) {
  const defaultValue = "select a priority";
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState(defaultValue);

  function handleSubmit(event) {
    event.preventDefault();
    const todo = { todo: title, priority: selected };
    setTodoList((prev) => [...prev, todo]);
    setSelected(defaultValue);
    setTitle("");
  }

  function handleInput(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleSelect(event) {
    event.preventDefault();
    setSelected(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="form">
        <input
          type="text"
          placeholder="title"
          name="titleInput"
          value={title}
          onChange={handleInput}
          required={true}
        />

        <select
          name="options"
          onChange={handleSelect}
          value={selected}
          required
        >
          <option value="">select a priority level</option>
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </select>

        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
