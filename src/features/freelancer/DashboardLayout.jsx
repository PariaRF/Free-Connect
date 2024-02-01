import DashboardHeader from "./DashboardHeader";

import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Statistics from "./Statistics";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Statistics proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
