
import React from "react";
import Layout from "@/components/Layout";
import { List, Grid, ChevronDown, Clock, Search, Plus } from "lucide-react";

const PlaylistItem = ({ title, creator, imageUrl, songs, type }: { title: string; creator: string; imageUrl: string; songs: number; type: string }) => (
  <div className="grid grid-cols-[auto,1fr,auto] items-center p-2 rounded-md hover:bg-spotify-cardHover/40 cursor-pointer group">
    <div className="w-12 h-12 mr-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div>
      <h4 className="text-sm font-medium text-spotify-white">{title}</h4>
      <div className="flex text-xs text-spotify-lightGray">
        <span>{type}</span>
        <span className="mx-1">•</span>
        <span>{creator}</span>
      </div>
    </div>
    <div className="text-xs text-spotify-lightGray opacity-0 group-hover:opacity-100 transition-opacity">
      {songs} songs
    </div>
  </div>
);

const Library = () => {
  // Mock data
  const playlists = [
    {
      title: "Liked Songs",
      creator: "You",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 142,
      type: "Playlist"
    },
    {
      title: "Daily Mix 1",
      creator: "Spotify",
      imageUrl: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 50,
      type: "Playlist"
    },
    {
      title: "Daily Mix 2",
      creator: "Spotify",
      imageUrl: "https://images.unsplash.com/photo-1460667262400-5de62464ae25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 50,
      type: "Playlist"
    },
    {
      title: "Discover Weekly",
      creator: "Spotify",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 30,
      type: "Playlist"
    },
    {
      title: "Release Radar",
      creator: "Spotify",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 30,
      type: "Playlist"
    },
    {
      title: "Tame Impala",
      creator: "Artist",
      imageUrl: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 0,
      type: "Artist"
    },
    {
      title: "Daft Punk",
      creator: "Artist",
      imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 0,
      type: "Artist"
    },
    {
      title: "For a Decade",
      creator: "You",
      imageUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      songs: 84,
      type: "Playlist"
    }
  ];

  return (
    <Layout>
      <div className="px-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-spotify-white">Your Library</h1>
            <button className="text-spotify-lightGray hover:text-spotify-white bg-transparent rounded-full p-1">
              <Plus size={22} />
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-spotify-lightGray hover:text-spotify-white bg-transparent rounded-full p-1">
              <Search size={22} />
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-spotify-white flex items-center gap-1 py-1 px-3 bg-spotify-cardHover rounded-full text-sm font-medium">
                Recents <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-4 gap-2">
          <button className="py-1 px-3 rounded-full bg-spotify-card text-sm font-medium text-spotify-white hover:bg-spotify-cardHover">
            Playlists
          </button>
          <button className="py-1 px-3 rounded-full bg-spotify-card text-sm font-medium text-spotify-white hover:bg-spotify-cardHover">
            Artists
          </button>
          <button className="py-1 px-3 rounded-full bg-spotify-card text-sm font-medium text-spotify-white hover:bg-spotify-cardHover">
            Albums
          </button>
        </div>

        <div className="flex flex-col space-y-1 mt-4">
          {playlists.map((playlist, index) => (
            <PlaylistItem key={index} {...playlist} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
