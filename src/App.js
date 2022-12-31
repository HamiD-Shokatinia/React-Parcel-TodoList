import { useState } from "react";
import { Maybe } from "./Component/Maybe";
import { getItem, setItem } from "./utils/local-storage.util";

export function App() {
  const [inpA, setInpA] = useState("");
  const [inpName, setInpName] = useState("");
  const [priority, setPriority] = useState("");
  const [initialTask, setInitialTask] = useState(getItem("tasks", []));

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
    if (!inpA || !inpName || priority == "nothing") {
      throw new console.error("you have to enter Values");
    } else {
      const newTask = [
        ...initialTask,
        {
          name: inpName,
          task: inpA,
          id: generateRandomNumber(),
          status: false,
          priority,
          priorityColor: PriorityColor(priority),
          pic: "ava3-bg",
        },
      ];
      setInitialTask(newTask);
      setItem("tasks", newTask);
      setInpA("");
      setInpName("");
      setPriority("nothing");
    }
  }

  function handleDone(e, id) {
    e.preventDefault();
    console.log(initialTask);

    const node = initialTask.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setInitialTask(node);
    setItem("tasks", node);
  }

  function handleRemove(e, id) {
    e.preventDefault();
    const newTask = initialTask.filter((item) => item.id != id);
    setInitialTask(newTask);
    setItem("tasks", newTask);
  }

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className=" mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Task List</h2>
                </div>
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
                      value={inpA}
                      onChange={(e) => {
                        setInpA(e.target.value);
                      }}
                      className="m-2 form-control"
                    ></input>
                    <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      style={{ height: 53,maxWidth:110 }}
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

                <Maybe condition={initialTask.length}>
                  <table className="table text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Team Member</th>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th className="text-center" scope="col">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {initialTask &&
                        initialTask.map((item) => {
                          return (
                            <tr key={item.id} className="fw-normal">
                              <th>
                                <img
                                  src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/${item.pic}.webp`}
                                  alt="avatar 1"
                                  style={{ width: "45px", height: "auto" }}
                                />
                                <span className="ms-2">{item.name}</span>
                              </th>
                              <td className="align-middle">
                                <span
                                  className={`${
                                    item.status
                                      ? "text-decoration-line-through"
                                      : ""
                                  }`}
                                >
                                  {item.task}
                                </span>
                              </td>
                              <td className="align-middle">
                                <h6 className="mb-0">
                                  <span
                                    className={`badge ${item.priorityColor}`}
                                  >
                                    {item.priority}
                                  </span>
                                </h6>
                              </td>
                              <td className="align-middle fs-4">
                                <div className="d-flex ">
                                  <a
                                    href="#!"
                                    data-mdb-toggle="tooltip"
                                    title="Done"
                                  >
                                    <i
                                      className={`bi bi-check-circle ${
                                        item.status
                                          ? "text-success"
                                          : "text-white"
                                      }`}
                                      onClick={(event) =>
                                        handleDone(event, item.id)
                                      }
                                    ></i>
                                  </a>
                                  <a
                                    href="#!"
                                    data-mdb-toggle="tooltip"
                                    title="Remove"
                                  >
                                    <i
                                      className="bi bi-trash text-white"
                                      onClick={(event) =>
                                        handleRemove(event, item.id)
                                      }
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </Maybe>
                <Maybe condition={!initialTask.length}>
                  <div className="text-center">There in No Task!!!</div>
                </Maybe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
