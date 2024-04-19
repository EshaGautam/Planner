import TaskItem from './TaskItem';
import classes from './TaskList.module.css';

function TaskList(props) {
  return (
    <ul className={classes.list}>
      {props.task.map((meetup) => (
        <TaskItem
          key={meetup.id}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default TaskList;
