import { useState } from "react";
import usetoggleProjectStatus from "./useToggleProjectsStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  //   const enabled = project.status === "OPEN" ? true : false;

  const { isUpdating, toggleProjectStatus } = usetoggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
