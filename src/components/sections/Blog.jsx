import { useState } from "react";
import b1 from '../../assets/blog1.jpg';
import b2 from '../../assets/blog2.jpg';
import b3 from '../../assets/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: " How I Built My Portfolio",
    excerpt: "Discover how I used React, Vite, and Tailwind CSS to create a blazing-fast portfolio.",
    image: b1, // Place this image in `public` folder
    date: "June 2025",
  },
  {
    id: 2,
    title: " Using EmailJS in React",
    excerpt: "Learn how to integrate EmailJS for sending form data without a backend.",
    image: b2,
    date: "May 2025",
  },
  {
    id: 3,
    title: " Responsive Design Tips",
    excerpt: "Explore essential principles for building beautiful mobile-first web apps.",
    image: b3,
    date: "April 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white text-[#102E50] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10"> My Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-800 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
