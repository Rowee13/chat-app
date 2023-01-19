import SideNavbar from "../components/SideNavbar";
import ChatList from "../components/ChatList";

const Sidebar = () => {
  return (
    <div className="flex flex-row">
      <SideNavbar />
      <ChatList />
    </div>
  );
};

export default Sidebar;
