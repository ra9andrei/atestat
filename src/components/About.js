import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-300 p-4 md:p-8">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Behind the Screens
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Where Passion for Cinema Meets Cutting-Edge Storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="animate-fade-in-up delay-100">
            <img
              src="/0001.png"
              alt="Film reel"
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Cinematic Journey
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2025 by a team of film enthusiasts and tech innovators,
              CineVerse emerged from a shared dream to revolutionize how we
              experience and interact with cinema.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We bridge the gap between movie lovers and the art form they
              adore, creating a platform that's as dynamic and diverse as the
              films we celebrate.
            </p>
          </div>
        </div>

        <div className="text-center mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 animate-fade-in-up">
            The Visionaries
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Andrei",
                role: "",
                bio: "",
                img: "/20250419_005605.jpg",
              },
              {
                name: "Razvan",
                role: "",
                bio: "",
                img: "/IMG-20250419-WA0000.jpg",
              },
              {
                name: "David",
                role: "",
                bio: "",
                img: "/IMG-20240425-WA0000.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="animate-fade-in-up delay-300 bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 mb-16 animate-fade-in-up delay-400">
          <h3 className="text-3xl font-bold text-white mb-8">
            Our Core Principles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎬",
                title: "Authenticity",
                text: "Genuine perspectives from industry insiders",
              },
              {
                icon: "🌍",
                title: "Diversity",
                text: "Celebrating global cinema heritage",
              },
              {
                icon: "💡",
                title: "Innovation",
                text: "Pioneering new ways to experience film",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in-up delay-500">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Explore?
          </h3>
          <Link
            to="/Movies"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg 
                                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
