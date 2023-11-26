import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className=" p-2 flex flex-col h-full min-h-screen">
      <div className="flex-1">
        {/* New chat */}
        <NewChat />
        <div>{/* model */}</div>
        {/* map through chat rows */}
      </div>
    </div>
  );
};

export default SideBar;
