import React, { useState, useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults"; 

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  // ✅ state for search query
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        {/* Pass search handler to Sidebar */}
        <Sidebar onSearch={(query) => setSearchQuery(query)} />

        {/* Setup routes */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/search" element={<SearchResults query={searchQuery} />} />
          </Routes>
        </div>
      </div>

      {/* Player at bottom */}
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
