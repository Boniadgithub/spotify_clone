import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // call parent search function
      navigate("/search"); // navigate to search results page
    }
  };

  return (
    <div className="w-[25%] h-full flex-col gap-2 text-white hidden p-2 lg:flex">
      {/* Top Section */}
      <div className="bg-[#121212] h-[15%] rounded-lg flex flex-col justify-around">
        {/* Home */}
        <div
          onClick={() => navigate(`/`)}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 pl-8">
          <img className="w-6" src={assets.search_icon} alt="" />
          <input
            type="text"
            placeholder="Search mezmur.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" p-1 rounded text-black w-[120px]"
          />
          <button
            onClick={handleSearch}
            className="bg-black px-3 py-1 rounded-lg ml-2 text-white text-sm"
          >
            Go
          </button>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <img className="w-5 h-5" src={assets.arrow_icon} alt="" />
            <img className="w-5 h-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Playlist Section */}
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <h1 className="font-light">It's easy, we will help you</h1>
          <button className="bg-white rounded-full px-4 py-3 text-[15px] text-black mt-4 mr-2">
            Create Playlist
          </button>
        </div>

        {/* Podcast Section */}
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let’s find some podcasts to follow</h1>
          <h1 className="font-light">We will keep you updated on new episodes</h1>
          <button className="bg-white rounded-full px-4 py-3 text-[15px] text-black mt-4 mr-2">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
