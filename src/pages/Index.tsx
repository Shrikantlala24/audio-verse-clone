
import React from "react";
import Layout from "@/components/Layout";
import { Clock, ChevronRight, ChevronLeft } from "lucide-react";

// Card component for playlists, albums, etc.
const Card = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <div className="bg-spotify-card rounded-md p-4 transition-all hover:bg-spotify-cardHover cursor-pointer group">
    <div className="mb-4 relative">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full aspect-square object-cover rounded-md shadow-lg"
      />
      <button className="absolute bottom-2 right-2 bg-spotify-green text-black rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl">
        <Play size={20} className="ml-0.5" fill="black" />
      </button>
    </div>
    <h3 className="font-bold text-base text-spotify-white truncate">{title}</h3>
    <p className="text-spotify-lightGray text-sm mt-1 line-clamp-2">{description}</p>
  </div>
);

// Section component with heading and grid of cards
const Section = ({ title, items }: { title: string; items: any[] }) => (
  <section className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold text-spotify-white hover:underline cursor-pointer">{title}</h2>
      <button className="text-spotify-lightGray font-semibold text-sm hover:text-spotify-white">
        Show all
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  </section>
);

const Index = () => {
  // Sample data
  const recentlyPlayed = [
    {
      title: "Chill Mix",
      description: "Relaxing beats to unwind to",
      imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Hip Hop Mix",
      description: "Your daily dose of hip hop tracks",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Throwback Hits",
      description: "The best hits from the past decades",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Workout Motivation",
      description: "High energy tracks to power your workout",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Study Focus",
      description: "Ambient sounds to help you concentrate",
      imageUrl: "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const madeForYou = [
    {
      title: "Daily Mix 1",
      description: "Tame Impala, Glass Animals, MGMT and more",
      imageUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Daily Mix 2",
      description: "Coldplay, Imagine Dragons, OneRepublic and more",
      imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Discover Weekly",
      description: "Your weekly mixtape of fresh music",
      imageUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Release Radar",
      description: "Catch all the latest releases from artists you follow",
      imageUrl: "https://images.unsplash.com/photo-1557787163-1635e2efb160?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Jazz Playlist",
      description: "The finest jazz classics and modern tunes",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Rock Classics",
      description: "The biggest rock hits of all time",
      imageUrl: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <Layout>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <button className="bg-black/30 rounded-full p-2 text-white">
            <ChevronLeft size={24} />
          </button>
          <button className="bg-black/30 rounded-full p-2 text-white">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-black/30 text-white rounded-full px-4 py-2 text-sm font-medium">
            Upgrade
          </button>
          <button className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">
            <span className="font-bold">U</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-spotify-white mb-6">Good afternoon</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyPlayed.slice(0, 6).map((item, index) => (
            <div 
              key={index}
              className="bg-spotify-cardHover/30 rounded-md flex items-center overflow-hidden hover:bg-spotify-cardHover/70 cursor-pointer group transition-colors"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="h-[80px] w-[80px]"
              />
              <span className="font-bold ml-4">{item.title}</span>
              <button className="ml-auto mr-4 bg-spotify-green rounded-full p-3 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-lg">
                <Play size={16} className="ml-0.5" fill="black" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Section title="Recently played" items={recentlyPlayed} />
      <Section title="Made for you" items={madeForYou} />
      <Section title="Popular playlists" items={recentlyPlayed.slice().reverse()} />
      <Section title="Based on your listening" items={madeForYou.slice().reverse()} />
    </Layout>
  );
};

export default Index;
