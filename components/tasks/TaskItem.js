import Card from '../ui/Card';
import classes from './TaskItem.module.css';

function TaskItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <span><input type='radio'></input></span>
          <span>{props.title}</span>
          <p>{props.description}</p>
          <button className={classes.actions}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default TaskItem;
