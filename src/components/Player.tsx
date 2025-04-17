
import React from "react";
import { 
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, 
  Volume2, Mic2, ListMusic, Laptop2, Heart, Maximize2
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

const Player = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-darker h-[90px] px-4 py-3 border-t border-spotify-divider">
      <div className="flex items-center justify-between">
        {/* Currently playing track info */}
        <div className="flex items-center w-1/4">
          <div className="h-14 w-14 bg-spotify-card rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618097426722-af3757b0ad69?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Album cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-spotify-white hover:underline cursor-pointer">Song Title</h4>
            <p className="text-xs text-spotify-lightGray hover:underline cursor-pointer">Artist Name</p>
          </div>
          <button className="ml-5 text-spotify-lightGray hover:text-spotify-white">
            <Heart size={16} />
          </button>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-1">
            <button className="text-spotify-lightGray hover:text-spotify-white">
              <Shuffle size={20} />
            </button>
            <button className="text-spotify-lightGray hover:text-spotify-white">
              <SkipBack size={20} />
            </button>
            <button 
              className="bg-spotify-white text-black rounded-full p-2 hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button className="text-spotify-lightGray hover:text-spotify-white">
              <SkipForward size={20} />
            </button>
            <button className="text-spotify-lightGray hover:text-spotify-white">
              <Repeat size={20} />
            </button>
          </div>
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-spotify-lightGray">0:00</span>
            <Slider 
              defaultValue={[0]} 
              max={100} 
              step={1}
              className="w-full h-1"
            />
            <span className="text-xs text-spotify-lightGray">3:45</span>
          </div>
        </div>

        {/* Volume and extra controls */}
        <div className="flex items-center justify-end gap-3 w-1/4">
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <Mic2 size={16} />
          </button>
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <ListMusic size={16} />
          </button>
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <Laptop2 size={16} />
          </button>
          <div className="flex items-center gap-2 w-24">
            <Volume2 size={16} className="text-spotify-lightGray" />
            <Slider 
              defaultValue={[70]} 
              max={100} 
              step={1}
              className="w-full h-1"
            />
          </div>
          <button className="text-spotify-lightGray hover:text-spotify-white">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
