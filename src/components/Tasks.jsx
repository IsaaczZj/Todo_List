import {
  ChevronRightIcon,
  DeleteIcon,
  Link,
  Trash,
  TrashIcon,
} from "lucide-react";
import TaskPage from "../pages/TaskPage";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  };

  return (
    <div>
      <ul className="space-y-4 bg-slate-200 rounded-md shadow-md p-6">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md  w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <Trash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
