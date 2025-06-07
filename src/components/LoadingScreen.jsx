import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Adjust path if needed

export default function LoadingScreen() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-800 to-white-800 text-white">
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 mb-6 animate-bounce"
      />
      <h1 className="text-4xl sm:text-5xl font-bold animate-pulse">
        Welcome to Irakoze's Portfolio<span className="text-yellow-300">{dots}</span>
      </h1>
    </div>
  );
}
