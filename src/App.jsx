import { useEffect, useState } from "react";

import CreateTask from "./components/createTask";
import ListTask from "./components/ListTasks";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log("tasks : ", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  // useEffect(() => {
  //   // Retrieve tasks from local storage
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (Array.isArray(storedTasks)) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className=" bg-slate-100 w-screen h-screen flex flex-col items-center pt-20 gap-16">
        <h1 className=" text-black text-2xl font-medium">TASK MANAGER</h1>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
