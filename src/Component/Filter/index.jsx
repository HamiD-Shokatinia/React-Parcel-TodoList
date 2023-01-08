import { Radio } from "antd";
import React, { useEffect, useState } from "react";

function FilterTask({ initialTask, setInitialTask }) {
    const task =initialTask
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status == "Finish") {
      setInitialTask(task.filter((item) => item.status == true));
    } else if (status == "Unfinish") {
      setInitialTask(task.filter((item) => item.status == false));
    } else setInitialTask(task);
  }, [status]);

  return (
    <div className="text-center pb-5">
      <Radio.Group value={status} onChange={(e) => setStatus(e.target.value)}>
        <Radio.Button value="All">All</Radio.Button>
        <Radio.Button value="Finish">Finish</Radio.Button>
        <Radio.Button value="Unfinish">Unfinish</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default FilterTask;
