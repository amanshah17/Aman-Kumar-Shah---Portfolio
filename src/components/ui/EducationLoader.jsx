import React from "react";

const EducationLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white pt-20 space-y-6">
      
      {/* Loader Icon + Text */}
      <div className="flex items-center space-x-4">
        {/* Glowing Loader */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          {/* Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 animate-ping"></div>
        </div>

        {/* Loading Text */}
        <p className="text-lg font-semibold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          New education is loading...
        </p>
      </div>

      {/* Subtitle */}
      <div className="text-center">
        <p className="text-sm text-gray-400 animate-pulse tracking-wide">
          Stay tuned for updates!
        </p>
      </div>

    </div>
  );
};

export default EducationLoader;
