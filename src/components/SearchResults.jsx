// src/pages/SearchResults.jsx
import React, { useEffect, useState } from "react";

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null); // store current video ID

  const API_KEY = "AIzaSyCtE13cX09Rs5AHvbXDv82U8E7kz4MryN4"; // replace with your API key

  const fetchYouTubeResults = async (pageToken = "") => {
    if (!query) return;
    setLoading(true);

    try {
      const searchQuery = `${query} orthodox mezmur`; // filter

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
          searchQuery
        )}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`
      );

      const data = await response.json();
      setResults((prev) => [...prev, ...(data.items || [])]);
      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching YouTube results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset results when query changes
    setResults([]);
    setNextPageToken(null);
    setPlayingVideoId(null); // stop previous video
    if (query) fetchYouTubeResults();
  }, [query]);

  if (!query) return <p className="text-white p-4">No search query.</p>;
  if (loading && results.length === 0) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-4">Search Results for "{query}"</h1>

      {/* Video Player */}
      {playingVideoId && (
        <div className="mb-4">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((item) => (
          <div
            key={item.id.videoId}
            className="bg-[#181818] p-2 rounded-lg hover:bg-[#282828] cursor-pointer"
            onClick={() => setPlayingVideoId(item.id.videoId)} // play video on click
          >
            <img
              className="rounded mb-2"
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <p className="font-semibold">{item.snippet.title}</p>
            <p className="text-sm text-gray-400">{item.snippet.channelTitle}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {nextPageToken && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => fetchYouTubeResults(nextPageToken)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
