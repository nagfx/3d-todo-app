import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import CreditsPage from "./components/CreditsPage";
import TodoList from "./components/TodoList";

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="pt-24 pb-20 px-8 min-h-screen flex items-center justify-center">
        {currentPage === "welcome" && (
          <WelcomePage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "todos" && <TodoList />}
        {currentPage === "credits" && <CreditsPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
