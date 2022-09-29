import { useForm } from 'react-hook-form'
// import '/App.css'
function CreateTodo({ setTodoList, saveData }) {
  // const { setTodoList } = props;
  const { register, handleSubmit, reset, getValues } = useForm();

  const onSubmit = todo => {
    setTodoList((prev) => [...prev, todo])
    console.log(getValues())
    reset({ todo: '', priority: defaultValue })
    saveData(todo)
  }

  const defaultValue = "select a priority"
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input data-testid="titleInput" type="text"
          placeholder="title"
          {...register("todo", { required: true })}
        />

        <select  {...register("priority", { required: true })} defaultValue={defaultValue}
        >
          <option disabled hidden value="select a priority">select a priority level</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button data-testid="button" type="submit" >Submit</button>
      </form>
    </>
  )
}



export default CreateTodo;