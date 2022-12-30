import { List, ListItem, ListItemText} from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// This is the function todo which handles the todos.
//We are using the props
//Props is basically properties of the function.
function Todo(props) {
  return (
    //List,ListItem,ListItemText are the components of material ui.
    <List className="todo_list">
      <ListItem>
        {/* Primary property is basically the main text and in the secondary property we are passing our props call. */}
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
      </ListItem>
      <DeleteForeverIcon id = "deleteButton"
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
    />
    </List>
  );
}

export default Todo;
