import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from "./components/sections/Blog";

AOS.init();



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
       <Navbar/>
       <Home />
      <Projects />
      <About />
      <Blog/>
      <Contact />
      <Footer/>
      </>
      )}
    </>
  );
}

export default App;
