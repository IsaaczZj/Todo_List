import { useState } from "react";
import Input from "./Input";

const AddTask = ({ onAddTaskSubimit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 p-6 rounded-md space-y-4 shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Input
        type="text"
        placeholder="Digite a descricao da tarefa"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        onClick={() => {
          if (title.trim() == "" || description.trim() == "") {
            return alert("Preencha os campos ");
          } else {
            onAddTaskSubimit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
