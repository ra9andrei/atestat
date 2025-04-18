import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-300 p-4 md:p-8">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Welcome to CineVerse
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Your Gateway to Cinematic Wonders
          </p>
        </div>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Step into a world where every film tells a story, every trailer
            sparks adventure, and every review deepens your love for cinema.
          </p>

          <p>
            CineVerse is your curated portal to the latest movie news, exclusive
            behind-the-scenes content, and insightful reviews - crafted for true
            cinephiles by passionate storytellers.
          </p>

          <p>
            Explore collections celebrating everything from timeless classics to
            modern blockbusters, indie gems to global cinema. Whether you're
            chasing trending films or diving into cinematic history, CineVerse
            offers an immersive journey through the silver screen.
          </p>

          <div className="mt-12">
            <Link
              to="/Movies"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
