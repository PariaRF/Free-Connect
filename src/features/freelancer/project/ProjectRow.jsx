import { useState } from "react";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumberWithComma } from "../../../utils/toPersianNumbers";
import trancateText from "../../../utils/truncateText";
import { MdAssignment } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index, role }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{trancateText(title, 30)}</td>
      <td>{toPersianNumberWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      {role === "freelancer" ? (
        <td>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={`درخواست انجام پروژه ${title}`}
          >
            <CreateProposal
              onClose={() => setOpen(false)}
              projectId={project._id}
            />
          </Modal>
          <button onClick={() => setOpen(true)}>
            <MdAssignment className="w-5 h-5 text-primary-900" />
          </button>
        </td>
      ) : (
        ""
      )}
    </Table.Row>
  );
}

export default ProjectRow;
