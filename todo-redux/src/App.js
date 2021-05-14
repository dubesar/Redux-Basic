import './App.css';
import List from "./components/list"
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useState} from "react";

function App() {

  const [task, setTask] = useState('')

  const dispatch = useDispatch();

  const inpForm = useFormik({
    initialValues: {
    },
    onSubmit: ()=> {
      console.log(task)
      dispatch({type: "ADD_TASK", payload: task});
    }
  })

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit = {inpForm.handleSubmit}>
        <input placeholder = "Enter the task" onChange = {handleChange}></input>
        <button type = "submit">Submit</button>
      </form>
      <List />
    </div>
  );
}

export default App;
