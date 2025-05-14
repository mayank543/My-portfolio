import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 
import 'tailwindcss/tailwind.css';

import Header from './components/Header'; 
import SkillsSection from "./components/SkillsSection";
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import Footer from "./components/Footer";
import FloatingBar from "./components/FloatingBar";
import AlternatePage from "./pages/AlternatePage";
import LiveClock from "./components/LiveClock";

function App() {
  return (
    <Router>
    <div className="bg-black min-h-screen text-white flex flex-col">
      <LiveClock/>
      <Routes>
        {/* 🏠 Main Page (Includes Header) */}
        <Route path="/" element={
          <>
            <Header />
            <SkillsSection />
            <Projects />
            <Footer />
          </>
        } />
  
        {/* 🎭 Alternate Page (No Header) */}
        <Route path="/alternate" element={<AlternatePage />} />
      </Routes>
  
      {/* Floating Bar Stays on All Pages */}
      <FloatingBar />
    </div>
  </Router>
  );
}

export default App;