//hooks
import { useState } from "react";
//utils
import { setItem } from "../../utils/local-storage.util";


function Input({initialTask,setInitialTask}) {
  const [inputTask, setInputTask] = useState("");
  const [inpName, setInpName] = useState("");
  const [priority, setPriority] = useState("");
  function generateRandomNumber() {
    var minm = 1000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  function PriorityColor(priority) {
    return priority == "High Prority"
      ? "bg-danger"
      : priority == "Middle Prority"
      ? "bg-warning"
      : "bg-success";
  }
  function handlerAddTask() {
    if (!inputTask || !inpName || priority == "nothing") {
      throw new console.error("you have to enter Values");
    } else {
      const newTask = [
        ...initialTask,
        {
          name: inpName,
          task: inputTask,
          id: generateRandomNumber(),
          status: false,
          priority,
          priorityColor: PriorityColor(priority),
          pic: "ava3-bg",
        },
      ];
      setInitialTask(newTask);
      setItem("tasks", newTask);
      setInputTask("");
      setInpName("");
      setPriority("nothing");
    }
  }

  return (
    <div className="text-center  container col-12">
      <div className="d-flex justify-content-center pb-5">
        <input
          type="text"
          placeholder="Name"
          style={{ width: 200 }}
          value={inpName}
          onChange={(e) => {
            setInpName(e.target.value);
          }}
          className="m-2 form-control"
        ></input>
        <input
          type="text"
          placeholder="enter your task"
          style={{ width: 400 }}
          value={inputTask}
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
          className="m-2 form-control"
        ></input>
        <select
          className="form-select mt-2"
          aria-label="Default select example"
          style={{ height: 53, maxWidth: 110 }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="nothing">Proritty</option>
          <option value="High Prority">High</option>
          <option value="Middle Prority">Middle</option>
          <option value="Low Proritty">Low</option>
        </select>
        <button
          type="button"
          onClick={handlerAddTask}
          className="btn btn-info m-3"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default Input;
