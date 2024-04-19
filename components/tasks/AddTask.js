import { useRef, useState } from 'react';

import Card from '../ui/Card';
import classes from './AddTask.module.css';

function AddTask(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [toggle,setToggle] = useState(true)

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      status:'incomplete'
    };

    props.onAddTask(taskData);
  }

  const toggleHandler =()=>{
   setToggle(prev=>!prev)
  }

  return (
    <Card>
  {toggle ? (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Task</label>
        <input type='text' required id='title' ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Task Description</label>
        <textarea
          id='description'
          required
          rows='5'
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.btn}>
        <div className={classes.actions}>
          <button>Add Task</button>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleHandler}>Cancel</button>
        </div>
      </div>
    </form>
  ) : (
    <p onClick={toggleHandler} className={classes.para}>Click here to Add task</p>
  )}
</Card>
  );
}

export default AddTask;
