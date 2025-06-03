"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-center mb-16 text-primary"
            >
              Contact Us
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-background-secondary p-8 rounded-lg shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary/20 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-primary/20 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-primary/20 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-button-primary text-white py-3 px-6 rounded-md hover:bg-button-primary-hover transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Get in Touch
                  </h2>
                  <p className="text-primary-secondary">
                    Have a question or want to work together? We'd love to hear
                    from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary">
                        📍
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Address
                      </h3>
                      <p className="text-primary-secondary">
                        123 Marketing Street, City, Country
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary">
                        📧
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Email
                      </h3>
                      <p className="text-primary-secondary">
                        contact@marketingcompany.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary">
                        📱
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Phone
                      </h3>
                      <p className="text-primary-secondary">
                        +1 234 567 890
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-background-secondary rounded-full flex items-center justify-center"
                      >
                        <span className="text-primary">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const socialLinks = [
  { icon: "📘", href: "#" },
  { icon: "📸", href: "#" },
  { icon: "🐦", href: "#" },
  { icon: "💼", href: "#" },
];
