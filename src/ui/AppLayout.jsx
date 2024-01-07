import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <div className=" py-4 px-8 bg-secondary-0">APP HEADER</div>
      <div className="row-start-1 row-span-2 bg-secondary-0">APP SIDEBAR</div>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
