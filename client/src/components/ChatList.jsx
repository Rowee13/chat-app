import { RiChatNewFill } from "react-icons/ri";

const ChatList = () => {
  return (
    <div className="w-80 h-screen border-r border-r-zinc-300 p-5 font-outfit">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Chats</h1>
        <div className="bg-zinc-100 rounded-full hover:bg-zinc-200">
          <RiChatNewFill className="w-5 h-5 m-3" />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
