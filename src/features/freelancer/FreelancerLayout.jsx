import { HiCollection, HiHome, HiOutlineViewGrid } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
          <CustomNavLink to="proposals">
            <HiOutlineViewGrid />
            <span>درخواست ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default FreelancerLayout;
