import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import StatisticIcon from "../../ui/StatisticIcon";

function Statistics({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3">
      <StatisticIcon
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="پروژه ها"
        value={numOfProjects}
      />
      <StatisticIcon
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="پروژه های واگذاری شده"
        value={numOfAcceptedProjects}
      />
      <StatisticIcon
        color="blue"
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
      />
    </div>
  );
}

export default Statistics;
