import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, Button, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data().todo));
      });
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };
  const addTodo = e => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };
  return (
    <div className='App'>
      <h1>hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Enter New Todo</InputLabel>
          <Input type='text' value={input} onChange={handleChange} />
        </FormControl>
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}>
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
