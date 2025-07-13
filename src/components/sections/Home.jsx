import { TypeAnimation } from "react-type-animation";
import bg from '../../assets/hero-bg.jpg';

export default function Home() {
  return (
    <section id="home"
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-[#102E50] mb-4">
         I'm <span className="text-blue-700">Isidore Irakoze</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            3000,
            "Web Developer",
            3000,
            "Software Engineer",
            3000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-xl md:text-3xl text-gray-700 font-semibold"
        />

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          I build clean, scalable, and interactive web applications from front to back.
        </p>

        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-[#102E50] text-white rounded-lg hover:bg-blue-900 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
