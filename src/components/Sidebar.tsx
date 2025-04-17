
import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, Library, Plus, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black h-full hidden md:flex flex-col text-spotify-lightGray">
      <div className="px-6 py-6">
        <img 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
          alt="Spotify" 
          className="h-10 mb-8" 
        />
        
        <nav className="space-y-6">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="flex items-center gap-4 text-spotify-white font-bold py-1 hover:text-spotify-white transition"
              >
                <Home size={24} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/search" 
                className="flex items-center gap-4 py-1 hover:text-spotify-white transition"
              >
                <Search size={24} />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/library" 
                className="flex items-center gap-4 py-1 hover:text-spotify-white transition"
              >
                <Library size={24} />
                <span>Your Library</span>
              </Link>
            </li>
          </ul>

          <div className="pt-5">
            <ul className="space-y-2">
              <li>
                <button className="flex items-center gap-4 py-1 hover:text-spotify-white transition group">
                  <div className="bg-spotify-lightGray group-hover:bg-spotify-white text-black p-1 rounded-sm">
                    <Plus size={18} />
                  </div>
                  <span>Create Playlist</span>
                </button>
              </li>
              <li>
                <button className="flex items-center gap-4 py-1 hover:text-spotify-white transition group">
                  <div className="bg-gradient-to-br from-purple-600 to-spotify-lightGray p-1 rounded-sm text-spotify-white">
                    <Heart size={18} fill="white" />
                  </div>
                  <span>Liked Songs</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      <div className="mt-2 px-5">
        <div className="border-t border-spotify-divider pt-4">
          <ul className="text-xs space-y-2">
            {["Cookies", "Privacy", "About Ads"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto px-6 py-4">
        <button className="border border-spotify-lightGray rounded-full px-3 py-1 text-sm font-semibold hover:border-spotify-white hover:scale-105 transition-transform text-spotify-white">
          English
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
