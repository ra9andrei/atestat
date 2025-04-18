import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import CustomVideoPlayer from "./videoPlayer";

function Play() {
  const { id } = useParams();
  const selectedItem = List.find((item) => item?.id === id);

  const remainingClicks = useRef(2);
  const lastClickTime = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const currentAdIndex = useRef(0);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const [episodeDescription, setEpisodeDescription] = useState("");

  const [episodeSearch, setEpisodeSearch] = useState("");

  const getVideoSource = () => {
    if (selectedItem.seasons && selectedSeason) {
      return `/videos/${selectedItem.type}/${selectedItem.id}/season${selectedSeason}/episode${selectedEpisode}.mp4`;
    }
    return `/videos/${selectedItem.type}/${selectedItem.id}/video.mp4`;
  };

  useEffect(() => {
    if (selectedItem && selectedItem.seasons) {
      const seasonKeys = Object.keys(selectedItem.seasons);
      if (seasonKeys.length > 0) {
        setSelectedSeason(seasonKeys[0]);
        setSelectedEpisode(1);
        if (selectedItem.seasons[seasonKeys[0]]?.episodeDescriptions?.[1]) {
          setEpisodeDescription(
            selectedItem.seasons[seasonKeys[0]].episodeDescriptions[1]
          );
        } else {
          setEpisodeDescription(selectedItem.description || "");
        }
      }
    } else if (selectedItem) {
      setEpisodeDescription(selectedItem.description || "");
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem && selectedItem.seasons && selectedSeason) {
      const seasonData = selectedItem.seasons[selectedSeason];
      if (seasonData?.episodeDescriptions?.[selectedEpisode]) {
        setEpisodeDescription(seasonData.episodeDescriptions[selectedEpisode]);
      } else {
        setEpisodeDescription(selectedItem.description || "");
      }
    }
  }, [selectedSeason, selectedEpisode, selectedItem]);

  const ads = [
    "https://superbet.ro/introducere",
    "https://ro.betano.com/"
  ];

  const showAd = () => {
    const adUrl = ads[currentAdIndex.current];
    currentAdIndex.current = (currentAdIndex.current + 1) % ads.length;
    window.open(adUrl, "_blank", "fullscreen=yes");
  };
  const handlePlayClick = () => {
    if (remainingClicks.current > 0) {
      showAd();
      remainingClicks.current -= 1;
    } else {
      setShowVideo(true);
      lastClickTime.current = Date.now();
    }
  };

  const handleVideoInteraction = () => {
    const currentTime = Date.now();
    const cooldownPeriod = 20000;
    if (currentTime - lastClickTime.current > cooldownPeriod) {
      showAd();
      lastClickTime.current = currentTime;
    }
  };

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
    setSelectedEpisode(1);
    setEpisodeSearch("");
  };

  const handleEpisodeSearch = (e) => {
    setEpisodeSearch(e.target.value);
  };

  const handleEpisodeSelect = (epNum) => {
    setSelectedEpisode(epNum);
    if (selectedItem.seasons[selectedSeason]?.episodeDescriptions?.[epNum]) {
      setEpisodeDescription(
        selectedItem.seasons[selectedSeason].episodeDescriptions[epNum]
      );
    } else {
      setEpisodeDescription(selectedItem.description || "");
    }
  };

  if (!selectedItem) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-white text-xl font-medium px-8 py-6 bg-red-900/30 backdrop-blur-sm rounded-lg shadow-lg border border-red-800/30">
          Content not found
        </div>
      </section>
    );
  }

  const isTvShow = Boolean(selectedItem.seasons);

  let episodesArray = [];

  if (isTvShow && selectedSeason) {
    const totalEpisodes = selectedItem.seasons[selectedSeason]?.episodes || 0;
    episodesArray = Array.from({ length: totalEpisodes }, (_, i) => i + 1);

    if (episodeSearch) {
      episodesArray = episodesArray.filter((ep) =>
        ep.toString().includes(episodeSearch)
      );
    }
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {isTvShow && (
        <aside className="bg-gray-900 w-80 flex-shrink-0 overflow-y-auto flex flex-col shadow-lg border-r border-gray-800">
          <div className="sticky top-0 z-10 bg-gray-900 p-4 shadow-md">
            <h1 className="text-lg font-bold mb-2 truncate">
              {selectedItem.title}
            </h1>

            <div className="mb-4">
              <label
                htmlFor="seasonSelect"
                className="block mb-2 font-medium text-gray-300 text-sm"
              >
                Season
              </label>
              <select
                id="seasonSelect"
                value={selectedSeason}
                onChange={handleSeasonChange}
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              >
                {Object.keys(selectedItem.seasons).map((season) => {
                  const { release_year } = selectedItem.seasons[season];
                  return (
                    <option key={season} value={season}>
                      Season {season} {release_year ? `(${release_year})` : ""}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="episodeSearch"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Search Episodes
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="episodeSearch"
                  placeholder="Enter episode number"
                  value={episodeSearch}
                  onChange={handleEpisodeSearch}
                  className="w-full p-2 pl-8 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                />
                <svg
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <h2 className="text-gray-400 uppercase text-xs font-semibold mb-3 tracking-wider">
              Episodes
            </h2>

            {episodesArray.length > 0 ? (
              <ul className="space-y-2">
                {episodesArray.map((epNum) => (
                  <li
                    key={epNum}
                    onClick={() => handleEpisodeSelect(epNum)}
                    className={`flex items-center py-2.5 px-3 rounded-lg cursor-pointer transition-all duration-200 group
                      ${
                        epNum === selectedEpisode
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-800 text-gray-300"
                      }`}
                  >
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-medium
                      ${
                        epNum === selectedEpisode
                          ? "bg-blue-700 text-white"
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                      }`}
                    >
                      {epNum}
                    </div>
                    <div className="flex-1">
                      <span className="block font-medium">
                        {selectedItem.seasons[selectedSeason]?.episodeTitles?.[
                          epNum
                        ] || `Episode ${epNum}`}
                      </span>
                      <span className="text-xs text-gray-400">
                        Season {selectedSeason}
                      </span>
                    </div>
                    {epNum === selectedEpisode && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No episodes found matching your search
              </div>
            )}
          </div>
        </aside>
      )}

      <main
        className={`flex-1 flex flex-col relative bg-black ${
          isTvShow ? "" : "h-screen"
        }`}
      >
        <div className="bg-gray-900 px-6 py-3 shadow-md border-b border-gray-800">
          <h1 className="text-lg font-medium mb-1">
            {selectedItem.title}
            {isTvShow &&
              selectedSeason &&
              ` - Season ${selectedSeason}, Episode ${selectedEpisode}`}
          </h1>
          <p className="text-sm text-gray-300 line-clamp-2">
            {episodeDescription}
          </p>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full h-full max-w-6xl flex flex-col relative video-container">
              {showVideo ? (
                <CustomVideoPlayer
                  season={selectedSeason}
                  episode={selectedEpisode}
                  src={getVideoSource()}
                  onInteraction={handleVideoInteraction}
                  posterImage={selectedItem.thumbnail}
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full relative overflow-hidden rounded-xl border-2 border-transparent shadow-2xl">
                    <button
                      onClick={handlePlayClick}
                      className="group absolute inset-0 w-full h-full focus:outline-none"
                      aria-label={`Play ${selectedItem.title}`}
                    >
                      <img
                        className="w-full h-full object-cover object-center"
                        src={selectedItem.thumbnail}
                        alt={selectedItem.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/10">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
                          <svg
                            className="w-12 h-12 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-gradient-to-t from-black to-transparent">
                        <p className="text-white text-lg font-medium">
                          Click to play{" "}
                          {remainingClicks.current > 0
                            ? `(${remainingClicks.current} more clicks needed)`
                            : ""}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Play;
