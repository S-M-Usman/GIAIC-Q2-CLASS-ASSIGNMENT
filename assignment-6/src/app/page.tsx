export default function Home() {
  return (
    <div className="min-h-screen grid gap-4 p-4 bg-gradient-to-r from-gray-700 via-black to-gray-700  grid-cols-1   md:grid-cols-4   lg:grid-cols-[200px_1fr_1fr] lg:grid-rows-[auto_1fr_1fr_auto]">

      <header className="bg-gradient-to-r from-violet-700 to-purple-600 shadow-md p-4 text-center text-white col-span-1 md:col-span-4  lg:col-span-3">
        Header
      </header>

      <aside className="bg-gradient-to-r from-teal-400 to-teal-600 shadow-md p-4 text-white  col-span-1 md:row-span-2 lg:row-span-2">
        Sidebar
      </aside>

      {/* Content-1 */}
      <div className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-300 shadow-md p-4 col-span-1 md:col-span-3  lg:col-span-2">
        Content-1
      </div>

      {/* Content-2 */}
      <div className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-300  shadow-md p-4 col-span-1  md:col-span-2  lg:col-span-1">
        Content-2
      </div>

      <div className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-300  shadow-md p-4 col-span-1  md:col-span-2  lg:col-span-1">
        Content-3
      </div>
      <footer className="bg-gradient-to-r from-violet-700 to-purple-600  shadow-md p-4 text-center text-white col-span-1md:col-span-4 lg:col-span-3">
        Footer
      </footer>
    </div>
  );
}

