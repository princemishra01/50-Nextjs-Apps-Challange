"use client"
import { useState } from "react";
import {v4} from "uuid";


export default function Home() {

  // To Do list
  // input
  // button - Add task
  // list of tasks
  // button - Delete task
  // button - Edit task (opens input)
  // button - Save task (saves input)

  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);

  // useState(() => {
  //   const temp = JSON.parse(localStorage.getItem("allTasks"));
  //   if(temp){
  //     setAllTasks(temp);
  //   }
  // }, [])

  // useState(() => {
  //   localStorage.setItem("allTasks", JSON.stringify(allTasks));
  // }, [allTasks]);

  const handleAddTask = () => {
    setAllTasks(allTasks => [...allTasks, {id : v4() , task: task , status: false}]);
    console.log(allTasks);
  }

  const handleDelete = (e) => {
    // setAllTasks(allTasks => [...allTasks, task]);
    setAllTasks(allTasks => allTasks.filter(task => task.id !== e.target.id));
  }

  const handleStatus = (e) => {
    // setAllTasks(allTasks => [...allTasks, task]);]
    console.log(e.target.id);
    let temp;
    
    temp = allTasks.map(task => {
      if(task.id === e.target.id){
        task.status = !task.status;
      }
      return task;
    })


    setAllTasks(temp);
  }
  

  return (
    <main className="flex flex-col items-center gap-5 mt-[60px]">
      <h1 className="text-6xl ">ToDo List</h1>
      <input className="text-black p-4 rounded-lg w-1/2" type="text" placeholder="Add a task..." onChange={(e) => setTask(e.target.value)}/>
      <button className="bg-white rounded-lg text-black p-4" onClick={handleAddTask}>Add Task</button>

      {
        allTasks && allTasks.map(task => {
          return (
            <div className="bg-gray-100 text-black p-4 rounded w-2/3 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center text-3xl">
                <input id={task.id} className="mr-3" type="checkbox" onClick={handleStatus} />
                <div  className={`${ task.status && "line-through" }`}>
                {task.task}
                </div>
              </div>
              <div className="" >
                <button onClick={handleDelete} id={`${task.id}`} className="bg-red-300 rounded-full text-2xl text-black px-2 my-4">x</button>
              </div>
            </div>
          )
        }
      )}
    </main>
  )
}
