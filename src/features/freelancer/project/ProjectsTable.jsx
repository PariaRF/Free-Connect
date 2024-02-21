import { useLocation } from "react-router-dom";
import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();
  const { pathname } = useLocation();
  const role = pathname.split("/").at(1);
  console.log();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        {role === "freelancer" ? <th>عملیات</th> : ""}
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow
            key={project._id}
            project={project}
            index={index}
            role={role}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
