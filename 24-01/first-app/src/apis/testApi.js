export const testAPI = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 15000);
  });
};

export let tasks = [
  {
    taskNumber: 1,
    taskName: "Task 1",
    taskDescription: "This is task 1",
  },
  {
    taskNumber: 2,
    taskName: "Task 1",
    taskDescription: "This is task 1",
  },
  {
    taskNumber: 3,
    taskName: "Task 1",
    taskDescription: "This is task 1",
  },
  {
    taskNumber: 4,
    taskName: "Task 1",
    taskDescription: "This is task 1",
  },
];

export const getAllTasks = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tasks);
    }, 3000);
  });

// Create 2 components:
// 1. AllTasks
// Fetch a list of all tasks when the component comes to the screen and render it.
// Every task will have a delete button! When clicked, the task gets deleted!
// When the task is deleted, print in console, that a task was deleted using componentDidUpdate
// 2. Task
// When the user clicks on a task, it should display the task details.
// Fetch info of a task using taskNumber!
