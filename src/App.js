import React, { useEffect, useState } from "react";
import { Button,FormControl,Input,InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([

  ]);
//when the app loads, we need to listen to the database and fetch new todos as they get added/removed.
//useEffect is a hook and it runs once the app loads.
  useEffect(() =>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  //this code here... fires when the app.js loads
  },[]);

  const [input, setInput] = useState([""]);
  // console.log('🔫', input);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // preventing the screen to refresh after submitting
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput([""]); //clear up the input after clicking add todo button
  };
  //we are using form to submit the input after presssing enter
  //and we also have to define the type of the button as submit
  return (
    <div className="App">
      <h1> Hello World!</h1>
      <form>
        {/* Form control is a component from material UI */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input}
          onChange={(event) => setInput(event.target.value)}/>
        </FormControl>

        {/* Here we are using the material ui button. */}
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          id = "buttonId"
        >
          Add Todo
        </Button>
        <ul>
          {/* Here we are using the map method which just loop through the todos array and do what is in its block. */}
          {todos.map(todo => (
          //  Here we are using the props component of react.
           <Todo todo = {todo}/>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
