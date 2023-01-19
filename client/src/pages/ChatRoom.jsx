import Sidebar from "../container/Sidebar";
import ChatContainer from "../container/ChatContainer";

const ChatRoom = () => {
  return (
    <div className="flex flex-row justify-between">
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default ChatRoom;
