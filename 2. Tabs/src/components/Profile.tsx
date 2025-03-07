import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

function Profile () {
    const [bannerUrl, setBannerUrl] = useState<string>( "https://via.placeholder.com/1500x400" )
    const [profileUrl, setProfileUrl] = useState<string>( "https://via.placeholder.com/150" )

    // Handlers for Imagee Changes
    const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];

        if (file) {
            // the line of code is used in JS to create a temporary Url that point to a Blob or File Object.
            setBannerUrl(URL.createObjectURL(file));
        }
    };

    const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];

        if (file) {
            setProfileUrl(URL.createObjectURL(file));
        }
    };

    return (
        <div className="relative w-[94%] ml-[5rem]">
            <div className="relative">
                <img src={bannerUrl} alt="background" className="w-full h-60 object-cover" />
                <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                    <label htmlFor="banner-upload" className="cursor-pointer">
                        <FaCamera size={24} />
                    </label>
                    <input 
                        type="file"
                        id="banner-upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleBannerChange}
                     />
                </button>
            </div>

            {/* Channel Logo */}
            <div className="flex items-center ml-4 mt-[2rem]">
                <img 
                    src={profileUrl} 
                    alt="Channel Logo"
                    className="w-40 h-40 object-cover rounded-full border-4 border-white relative"
                 />
                
                <button className="absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded full hover:bg-gray-600">
                    <label htmlFor="profile-upload" className="cursor-pointer">
                        <FaCamera size={24} />
                    </label>
                    <input 
                        type="file"
                        id="profile-upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfileChange}
                    />
                </button>
                {/* Channel Details */}
                <div className="ml-4 mt-4">
                    <h1 className="text-2xl font-bold">Antel Dev</h1>
                    <p>0M views</p>
                    <p className="mt-2">
                        This is a short description of the YouTube channel. It gives an
                        overview of the content and what viewers can expect.
                    </p>
                    <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
                        Subscribe 
                    </button>
                </div>
            </div>
            <Tabs />
        </div>
    );
};

export default Profile;