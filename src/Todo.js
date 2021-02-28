import "./Todo.css";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";

const Todo = props => {
  return (
    <List>
      <ListItem className='todo__list'>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo} secondary='dummay deadline' />
      </ListItem>
    </List>
  );
};

export default Todo;
