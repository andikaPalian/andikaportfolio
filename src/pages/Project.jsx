import React from "react";

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Social Media API</h3>
            <p className="text-gray-400 mb-4">
              Social Medi API is a Restful API for social media app that allows
              users to share posts, like and comment on other users posts,
              follow other user and message other users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
