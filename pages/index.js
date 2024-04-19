import React from 'react'
import { MongoClient } from 'mongodb'
import AddTask from '../components/tasks/AddTask'
import TaskList from '../components/tasks/TaskList'

const HomePage = (props) => {
 
    const newTaskHandler = (enteredData) => {
      
        const sendDataToDB = async () => {
            try {
                const response = await fetch("/api/add-task", {
                    method: "POST",
                    body: JSON.stringify(enteredData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data); 
            } catch (error) {
                console.error("Error:", error);
            }
        };

        sendDataToDB()
    };

  return (
    <>
   <AddTask onAddTask={newTaskHandler}/>
   <TaskList task={props.task}/>
   </>
  )
}

export async function getStaticProps(){
    //here data gets fetched during build or before the page get render

    const client = await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    // Accessing the meetups collection
    const taskCollection = db.collection('add-task');

    const taskArr = await taskCollection.find().toArray()
    //will always return an object which contains props that has data
    client.close()
    return {
        props: {
            task: taskArr.map(task=>({
                title:task.title,
                compeleted:task.compeleted,
                description:task.description,
                id:task._id.toString()

            }))
        },
        revalidate:1

    }

}

export default HomePage