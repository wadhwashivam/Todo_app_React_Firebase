import { Modal,Button,List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>({
  paper:{
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3), 
  },
}));
// This is the function todo which handles the todos.
//We are using the props
//Props is basically properties of the function.
function Todo(props) {
  const classes = useStyles();
  const[open,setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(true);
  }
  const updateTodo = () =>{
    //update the todo with the new input text
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true});
    setOpen(false);
  }
  const [input,setInput] = useState();
  return (
    // We cannot have two siblings, we have to wrap it under the JSX fragments.
    <>
      <Modal open={open} onClose={event => setOpen(false)}>
        <div className = {classes.paper}>
          <h1>Edit Todo</h1>
          <input placeholder = {props.todo.todo} value = {input} onChange = {event => setInput(event.target.value)}/>
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      {/* List,ListItem,ListItemText are the components of material ui. */}
      <List className="todo_list">
        <ListItem>
          {/* Primary property is basically the main text and in the secondary property we are passing our props call. */}
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy Deadline ⏰"
          />
        </ListItem>
        <Button onClick = {event => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon
          id="deleteButton"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
