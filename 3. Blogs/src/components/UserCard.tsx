import { FaUserCircle } from "react-icons/fa"; 


interface UserCardProps {
    person: {
    name: string;
    following: boolean;
    };
}

function UserCard({ person } : UserCardProps ) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <FaUserCircle className="text-3xl mr-3 text-gray-500" />
                <span>{person.name}</span>
            </div>
            <button
                className={`px-4 py-1 text-sm runded-full ${person.following ? "bg-black text-white": "bg-gray-200 text-gray-700"}`}>
                    {person.following ? "Following": "Follow"}
                </button>
        </div>
    );
};

export default UserCard;