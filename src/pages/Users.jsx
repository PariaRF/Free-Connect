import UsersTable from "../features/admin/users/UsersTable";
import Empty from "../ui/Empty";
import Loading from "../ui/Loading";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">کاربران</h1>
      <UsersTable />
    </div>
  );
}

export default Users;
