//utils
import { setItem } from "../../utils/local-storage.util";

import { Maybe } from "../Maybe";

function TableRender(initialTask, setInitialTask) {
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
      <Maybe condition={initialTask.length}>
        <tbody>
          {initialTask.map((item) => {
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
                      item.status ? "text-decoration-line-through" : ""
                    }`}
                  >
                    {item.task}
                  </span>
                </td>
                <td className="align-middle">
                  <h6 className="mb-0">
                    <span className={`badge ${item.priorityColor}`}>
                      {item.priority}
                    </span>
                  </h6>
                </td>
                <td className="align-middle fs-4">
                  <div className="d-flex ">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done">
                      <i
                        className={`bi bi-check-circle ${
                          item.status ? "text-success" : "text-white"
                        }`}
                        onClick={(event) => handleDone(event, item.id)}
                      ></i>
                    </a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove">
                      <i
                        className="bi bi-trash text-white"
                        onClick={(event) => handleRemove(event, item.id)}
                      ></i>
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Maybe>
      <Maybe condition={!initialTask.length}>
        <div className="text-center">There in No Task!!!</div>
      </Maybe>
    </table>
  );
}

export default TableRender;
