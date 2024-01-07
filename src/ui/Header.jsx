import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return (
    <div className=" py-4 px-8 bg-secondary-0">
      <h1>HEADER COMPONENT</h1>
    </div>
  );
}

export default Header;
