import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[120px,1fr,120px] grid-cols-[1fr,3fr,1fr] gap-4 h-screen bg-white p-4 box-border">
      {/* Navigation */}
      <nav className="row-span-3 bg-yellow-300 flex items-center justify-center text-black font-bold shadow-lg">
        Nav
      </nav>

      {/* Header */}
      <header className="col-span-2 bg-yellow-300 flex items-center justify-center text-black font-bold shadow-lg">
        Header
      </header>

      {/* Article */}
      <article className="bg-yellow-300 flex items-center justify-center text-black font-bold shadow-lg">
        Article
      </article>

      {/* Ads */}
      <aside className="bg-yellow-300 flex items-center justify-center text-black font-bold shadow-lg">
        Ads
      </aside>

      {/* Footer */}
      <footer className="col-span-2 bg-yellow-300 flex items-center justify-center text-black font-bold shadow-lg">
        Footer
      </footer>
    </div>
  );
};

export default Home;
