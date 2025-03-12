import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"; 
import 'tailwindcss/tailwind.css';

import SkillsSection from "./components/SkillsSection";
import AboutMe from './components/AboutMe';
import Header from './components/Header'; 
import Projects from './components/Project';
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header> </Header>
      <SkillsSection />
      <Projects/>
      <Footer />
      
      
    </div>
  )
}

export default App
