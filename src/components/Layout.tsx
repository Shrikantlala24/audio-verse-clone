
import React from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen overflow-hidden bg-spotify-dark">
      <div className="flex h-[calc(100%-90px)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 spotify-scrollbar bg-gradient-to-b from-spotify-cardHover to-spotify-dark">
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
