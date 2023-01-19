import NoPic from "../../assets/blank-profile-pic.png";

const ChatCard = () => {
  return (
    <div className="flex flex-row bg-zinc-100 py-2 px-3 rounded-md hover:bg-zinc-200 font-outfit">
      <div className="flex w-12 h-12 rounded-full object-contain object-bottom overflow-hidden">
        <img src={NoPic} alt="blank profile pic" className="w-16" />
      </div>
      <div className="pl-3">
        <h2>Rowee Andrew Apor</h2>
      </div>
    </div>
  );
};

export default ChatCard;
