import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Statistics from "./Statistics";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Statistics projects={projects} />
    </div>
  );
}

export default DashboardLayout;
