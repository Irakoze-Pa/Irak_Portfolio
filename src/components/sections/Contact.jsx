import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ sent: false, error: false });

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
        "service_pu9xj8t",     // <-- Replace with your EmailJS service ID
        "template_drxaeha",    // <-- Replace with your EmailJS template ID
        form.current,
        "66vQu6Zys5ICFU_U5"      // <-- Replace with your EmailJS public key
       )
    .then(
      () => {
        setStatus({ sent: true, error: false });
        form.current.reset();

        // ⏳ Hide message after 5 seconds
        setTimeout(() => {
          setStatus({ sent: false, error: false });
        }, 5000);
      },
      () => {
        setStatus({ sent: false, error: true });
      }
    );
};

  return (
    <section id="contact" className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/contact.jpg"
            alt="Contact"
            className="w-full rounded-lg shadow-md max-w-md mx-auto"
          />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#102E50] mb-6">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            Have a question or want to work together? Feel free to reach out using the form below.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#102E50] outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#102E50] outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#102E50] outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#102E50] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Send Message
            </button>

            {status.sent && (
              <p className="text-green-600 text-sm pt-2">✅ Message sent successfully!</p>
            )}
            {status.error && (
              <p className="text-red-500 text-sm pt-2">❌ Failed to send. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
