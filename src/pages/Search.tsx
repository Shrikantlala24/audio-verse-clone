
import React from "react";
import Layout from "@/components/Layout";
import { Search as SearchIcon } from "lucide-react";

const GenreCard = ({ title, color, imageUrl }: { title: string; color: string; imageUrl: string }) => (
  <div 
    className={`rounded-lg overflow-hidden h-48 relative cursor-pointer transition-transform hover:scale-[1.03]`}
    style={{ backgroundColor: color }}
  >
    <div className="p-4 h-full flex flex-col justify-between">
      <h3 className="font-bold text-2xl text-spotify-white">{title}</h3>
      <div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover transform rotate-25 translate-x-4 translate-y-4 shadow-lg"
        />
      </div>
    </div>
  </div>
);

const Search = () => {
  const genres = [
    { title: "Pop", color: "#8c1932", imageUrl: "https://images.unsplash.com/photo-1619961602705-6b9a54aeec9d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Hip-Hop", color: "#ba5d07", imageUrl: "https://images.unsplash.com/photo-1520174691701-bc555a3404ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Rock", color: "#e61e32", imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Dance/Electronic", color: "#dc148c", imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "R&B", color: "#8400e7", imageUrl: "https://images.unsplash.com/photo-1496057215207-d40f817c4104?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Indie", color: "#2d46b9", imageUrl: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Podcasts", color: "#006450", imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Latin", color: "#e1118c", imageUrl: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Mood", color: "#777777", imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Trending", color: "#b02897", imageUrl: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Workout", color: "#ff5733", imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Chill", color: "#148a08", imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
  ];

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-spotify-white mb-6">Search</h1>
        <div className="relative max-w-xl">
          <SearchIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          <input 
            type="text" 
            placeholder="What do you want to listen to?"
            className="w-full py-3 px-10 rounded-full bg-white text-black focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-spotify-white mb-4">Browse all</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {genres.map((genre, index) => (
            <GenreCard key={index} {...genre} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
