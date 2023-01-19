import { RiChatNewFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import ChatCard from "./ui/ChatCard";

const ChatList = () => {
  return (
    <div className="flex flex-col w-96 h-screen border-r border-r-zinc-300 p-5 font-outfit">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Chats</h1>
        <div className="bg-zinc-100 rounded-full hover:bg-zinc-200">
          <RiChatNewFill className="w-5 h-5 m-3" />
        </div>
      </div>

      <div className="relative py-3">
        <input
          placeholder="Search"
          className="bg-zinc-100 w-full py-2 pl-10 rounded-full"
        />
        <HiOutlineSearch className="w-5 h-5 absolute top-[22px] left-3 text-zinc-500" />
      </div>

      <div>
        <ChatCard />
      </div>
    </div>
  );
};

export default ChatList;
