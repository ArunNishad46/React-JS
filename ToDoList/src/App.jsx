import { useEffect, useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map(task => 
        task.id === editId ? { ...task, text: input } : task
      ));
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input.trim(), completed: false }
      ]);
    }

    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="relative text-2xl font-bold text-center mb-4"><LuNotebookPen className="text-3xl absolute top-[4px] left-[105px] text-yellow-400" />ToDo App</h1>

        <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="accent-blue-600 cursor-pointer w-[16px] h-[16px]"
                />
                <span className={`text-md ${task.completed ? "line-through text-gray-400" : ""}`}>
                  {task.text}
                </span>
              </div>
              <div className="flex gap-2 text-sm">
                <button
                  onClick={() => editTask(task)}
                  className="text-yellow-500 hover:text-yellow-600 cursor-pointer"
                >
                  <FaRegEdit className="text-2xl" />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  <MdDelete className="text-2xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
