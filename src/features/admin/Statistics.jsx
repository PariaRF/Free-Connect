import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
  HiUsers,
} from "react-icons/hi";

import StatisticIcon from "../../ui/StatisticIcon";
import { toPersianNumberWithComma } from "../../utils/toPersianNumbers";

function Statistics({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <StatisticIcon
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />

      <StatisticIcon
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />

      <StatisticIcon
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
    </div>
  );
}

export default Statistics;
