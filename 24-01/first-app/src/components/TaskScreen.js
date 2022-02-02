import React, { useEffect, useState } from "react";
import { getAllTasks } from "../apis/testApi";

const TaskScreen = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TaskScreen Mounted");
    getAllTasks().then((foundTasks) => setAllTasks(foundTasks));
  }, [count]);

  useEffect(() => {
    console.log("TaskScreen Updated");
  });

  return allTasks.map((task, index) => (
    <div
      key={index}
      onClick={(e) => {
        console.log("Clicked");
        setCount(count + 1);
      }}
    >
      <h1>
        {task.taskNumber} {task.taskName}
      </h1>
      <p>{task.taskDescription}</p>
    </div>
  ));
};

export default TaskScreen;

// useEffect
// 1. It takes 2 arguments
// A. The first argument is a function that will be called after the component is rendered
// B. The second argument is an array of values that will be watched for changes (optional)
// B.a. No array passed: useEffect will run on initial render and every state update
// B.b. Empty Array passed: useEffect will run only on initial render
// B.c. Array of values passed: useEffect will run only on initial render and every time
// when the value of any variable in the array changes
