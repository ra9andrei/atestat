import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "./List";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

function MediaCard({ item }) {
  const isTVShow = item.type === "tv_show";
  const seasonsCount = isTVShow ? Object.keys(item.seasons || {}).length : 0;

  const years =
    isTVShow && item.seasons
      ? Object.values(item.seasons).reduce((acc, season) => {
          if (season.release_year) {
            acc.push(season.release_year);
          }
          return acc;
        }, [])
      : [];
  const startYear = years.length > 0 ? Math.min(...years) : "";
  const endYear = years.length > 0 ? Math.max(...years) : "";

  return (
    <Link
      to={`/Play/${item.type}/${item.id}`}
      className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer block border border-gray-800 group"
    >
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-amber-500 px-3 py-1 rounded-full text-black font-medium flex items-center gap-1 shadow-lg">
            ⭐ {item.imdb_score}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <h2 className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
          {item.title}
        </h2>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-sm">
            {isTVShow ? (
              <>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 border border-gray-700">
                  {startYear} - {endYear || "Present"}
                </span>
                <span className="bg-green-600/20 px-3 py-1 rounded-full text-green-400 border border-green-900">
                  📺 {item.creator}
                </span>
              </>
            ) : (
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 border border-gray-700">
                🎬 {item.metascore} Metascore
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <span
              className={`px-3 py-1 rounded-full text-white ${
                isTVShow ? "bg-purple-600" : "bg-blue-600"
              }`}
            >
              {isTVShow ? `📀 ${seasonsCount} Seasons` : "🎥 Movie"}
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 line-clamp-1 max-w-full">
              {item.description.substring(0, 40)}...
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MediaDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filterMedia = (items) => {
    return items.filter((item) => {
      const searchLower = debouncedSearchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.creator?.toLowerCase().includes(searchLower)
      );
    });
  };

  const filteredMedia = filterMedia(List);
  const movies = filteredMedia.filter((item) => item.type === "movie");
  const tvShows = filteredMedia.filter((item) => item.type === "tv_show");

  let displayedMedia = [];
  if (activeTab === "all") displayedMedia = filteredMedia;
  if (activeTab === "movies") displayedMedia = movies;
  if (activeTab === "tvshows") displayedMedia = tvShows;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, description, or creator..."
              className="w-full p-4 pl-12 rounded-xl bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 rounded-xl p-1 shadow-xl">
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Media ({filteredMedia.length})
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "movies"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("movies")}
            >
              Movies ({movies.length})
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "tvshows"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("tvshows")}
            >
              TV Shows ({tvShows.length})
            </button>
          </div>
        </div>

        {activeTab === "all" && (
          <>
            <section className="mb-12">
              <h1 className="text-3xl font-bold text-white pb-2 mb-8 flex items-center">
                <span className="text-blue-500 mr-2">🎬</span> Movies{" "}
                <span className="ml-3 bg-gray-800 text-gray-300 text-lg px-3 py-1 rounded-full">
                  {movies.length}
                </span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                  <MediaCard key={`movie-${movie.id}`} item={movie} />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h1 className="text-3xl font-bold text-white pb-2 mb-8 flex items-center">
                <span className="text-blue-500 mr-2">📺</span> TV Shows{" "}
                <span className="ml-3 bg-gray-800 text-gray-300 text-lg px-3 py-1 rounded-full">
                  {tvShows.length}
                </span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tvShows.map((show) => (
                  <MediaCard key={`tvshow-${show.id}`} item={show} />
                ))}
              </div>
            </section>
          </>
        )}

        {(activeTab === "movies" || activeTab === "tvshows") && (
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-white pb-2 mb-8 flex items-center">
              <span className="text-blue-500 mr-2">
                {activeTab === "movies" ? "🎬" : "📺"}
              </span>
              {activeTab === "movies" ? "Movies" : "TV Shows"}
              <span className="ml-3 bg-gray-800 text-gray-300 text-lg px-3 py-1 rounded-full">
                {activeTab === "movies" ? movies.length : tvShows.length}
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedMedia.map((item) => (
                <MediaCard key={`${item.type}-${item.id}`} item={item} />
              ))}
            </div>
          </section>
        )}

        {displayedMedia.length === 0 && (
          <div className="bg-gray-800/50 rounded-xl text-center text-gray-400 py-32 backdrop-blur-sm border border-gray-700">
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl font-medium mb-2">No results found</h3>
            <p>We couldn't find anything matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaDisplay;
