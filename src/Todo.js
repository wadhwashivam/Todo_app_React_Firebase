import {List, ListItem, ListItemText,} from "@material-ui/core";
import './Todo.css';
import React from "react";
// This is the function todo which handles the todos.
//We are using the props 
//Props is basically properties of the function.
function Todo(props){
  return (
    //List,ListItem,ListItemText are the components of material ui.
  <List className = "todo_list">
    <ListItem>
      {/* Primary property is basically the main text and in the secondary property we are passing our props call. */}
      <ListItemText primary = {props.text} secondary = "Dummy Deadline ⏰" />
    </ListItem>    
  </List>
  )
}

export default Todo;
