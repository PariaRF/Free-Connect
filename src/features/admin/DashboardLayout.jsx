import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Statistics from "./Statistics";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: proposalsIsLoading, proposals } = useProposals();
  const { isLoading: projectsIsLoading, projects } = useProjects();
  const { isLoading: usersIsLoading, users } = useUsers();

  if (proposalsIsLoading || projectsIsLoading || usersIsLoading)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Statistics
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
