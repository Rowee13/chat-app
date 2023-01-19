import {
  RiChatSmile3Fill,
  RiAccountPinCircleFill,
  RiContactsBook2Fill,
} from "react-icons/ri";

const SideNavbar = () => {
  return (
    <nav className="flex flex-col items-center justify-start w-16 h-screen bg-zinc-50 py-6 border-r border-r-zinc-300">
      <div className="p-3 rounded-md bg-zinc-200">
        <RiChatSmile3Fill className="w-6 h-6" />
      </div>
      <div className="p-3 rounded-md hover:bg-zinc-200">
        <RiAccountPinCircleFill className="w-6 h-6" />
      </div>
      <div className="p-3 rounded-md hover:bg-zinc-200">
        <RiContactsBook2Fill className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default SideNavbar;
