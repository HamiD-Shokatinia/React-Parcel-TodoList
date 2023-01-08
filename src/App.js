import { useState } from "react";
import Counter from "./Component/Counter";
import FilterTask from "./Component/Filter";
import Input from "./Component/inputForm";
import { Maybe } from "./Component/Maybe";
import TableRender from "./Component/Tasks";
import { getItem } from "./utils/local-storage.util";

export function App() {
  const [initialTask, setInitialTask] = useState(getItem("tasks", []));

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className=" mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <Counter></Counter>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Task List</h2>
                </div>
                <Input
                  initialTask={initialTask}
                  setInitialTask={setInitialTask}
                ></Input>
                <FilterTask
                  initialTask={initialTask}
                  setInitialTask={setInitialTask}
                ></FilterTask>
                <TableRender
                  initialTask={initialTask}
                  setInitialTask={setInitialTask}
                ></TableRender>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
