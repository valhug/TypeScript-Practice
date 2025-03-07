function Sidebar() {
    return (
        <div className="w-16 fixed h-screen border-[#242424] p-4 flex flex-col items-center space-y-8" >
            <div className="text-white"><a href="/">Logo</a></div>
            <div className="text-gray-400">📁</div>
            <div className="text-gray-400">👤</div>
            <div className="text-gray-400">⚙️</div>
        </div>
    );
};

export default Sidebar;