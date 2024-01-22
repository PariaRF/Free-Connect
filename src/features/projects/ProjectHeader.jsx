import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { useState } from "react";

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-bold text-secondary-700 text-xl">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
        style={{ height: "calc(100vh - 100px)" }}
      >
        <CreateProjectForm onClose={() => StereoPannerNode(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}

export default ProjectHeader;
