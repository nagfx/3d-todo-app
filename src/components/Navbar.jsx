import { Home, List, Info } from "lucide-react";

const Navbar = ({ setCurrentPage }) => (
  <nav className="bg-white/10 backdrop-blur-lg p-4 fixed top-0 left-0 right-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">3D Todo</h1>
      <div className="flex gap-6">
        <button
          onClick={() => setCurrentPage("welcome")}
          className="text-white hover:text-blue-300 flex items-center gap-2"
        >
          <Home size={20} /> Home
        </button>
        <button
          onClick={() => setCurrentPage("todos")}
          className="text-white hover:text-blue-300 flex items-center gap-2"
        >
          <List size={20} /> Tasks
        </button>
        <button
          onClick={() => setCurrentPage("credits")}
          className="text-white hover:text-blue-300 flex items-center gap-2"
        >
          <Info size={20} /> Credits
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
