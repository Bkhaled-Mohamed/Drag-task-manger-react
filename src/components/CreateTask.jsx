import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function CreateTask({ tasks, setTasks }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const submitTasks = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("Task must have more then 3 characters");
    if (task.name.length > 100)
      return toast.error("Task too long, just make it simple and clear");
    setTasks((prev) => {
      const List = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(List));
      return List;
    });

    toast.success("Task created successfully");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };
  {
    console.log(task);
  }
  return (
    <div>
      <form onSubmit={submitTasks}>
        <input
          type="text"
          className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-2"
          value={task.name}
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />

        <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
          create
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
