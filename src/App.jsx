import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "tailwindcss/tailwind.css";

import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import FloatingBar from "./components/FloatingBar";
import AlternatePage from "./pages/AlternatePage";
import LiveClock from "./components/LiveClock";
import PageContainer from "./components/PageContainer"; // ✅ FIXED path

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white flex flex-col">
        <LiveClock />
        <Routes>
          {/* 🏠 Main Page (Wrapped in PageContainer) */}
          <Route
            path="/"
            element={
              <PageContainer>
                <Header />
                <SkillsSection />
                <Projects />
                <Footer />
              </PageContainer>
            }
          />

          {/* 🎭 Alternate Page */}
          <Route path="/alternate" element={<AlternatePage />} />
        </Routes>

        {/* Floating Bar (Visible on all pages) */}
        <FloatingBar />
      </div>
    </Router>
  );
}

export default App;