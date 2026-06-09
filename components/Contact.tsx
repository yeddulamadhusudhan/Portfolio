"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with an API)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#05050A] to-[#0A0A15]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase bg-purple-500/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in collaboration or full-time opportunities? I'd love to hear from you!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <FaEnvelope className="text-purple-400 text-2xl" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:madhusudhan0092@gmail.com" className="text-gray-300 hover:text-purple-400 transition font-medium">
                        madhusudhan0092@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <FaPhone className="text-purple-400 text-2xl" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <span className="text-gray-300 font-medium">+91 9398674851</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <span className="text-gray-300 font-medium">Kurnool, Andhra Pradesh, India</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/madhusudhanreddyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yeddula-msreddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Send a Message</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  {isSubmitted ? "✓ Message Sent!" : "✉️ Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


