"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-background-dark">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Creative Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforming ideas into extraordinary experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-button-default text-black px-8 py-3 rounded-full font-semibold hover:bg-button-default-hover transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-shadow-dark shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <div className="relative mb-3 rounded-lg h-64 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-12 text-text.primary"
            >
              Trusted By
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 bg-shadow-dark rounded-lg bg-shadow-dark shadow-lg"
                >
                  <div className="w-32 h-16  rounded-lg flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={`Client ${index + 1}`}
                        fill
                        className="object-contain p-2 dark:brightness-0 dark:invert"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="text-center mb-12"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-6 "
              >
                Your requirements met fully
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl max-w-3xl mx-auto"
              >
                We start to nurture our future business relationship from day one, by putting together services and custom packages designed to accelerate your growth
              </motion.p>
            </motion.div>

        {/* Statistics Section */}
        <section className="py-20 bg-background-score">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-6 rounded-xl bg-shadow-dark hover:shadow-xl transition-shadow bg-shadow-dark shadow-lg"
                >
                  <motion.h3 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.2 + 0.3
                    }}
                    className="text-4xl md:text-5xl font-bold text-button-default mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-xl font-semibold  mb-1"
                  >
                    {stat.label}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="text-gray-400"
                  >
                    {stat.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const services = [
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    image: "/digital-marketing.png",
  },
  {
    title: "Content Creation",
    description:
      "Engaging content that tells your story and connects with your audience.",
    image: "/content-creation.png",
  },
  {
    title: "Brand Strategy",
    description:
      "Strategic brand development to help you stand out in the market.",
    image: "/brand-strategy.png",
  },
];

const clients = [
  { logo: "/clients/trt1.svg", name: "Client 1" },
  { logo: "/clients/trt2.svg", name: "Client 2" },
  { logo: "/clients/trt3.svg", name: "Client 3" },
  { logo: "/clients/Trt4.svg", name: "Client 4" },
];

const statistics = [
  {
    value: "2015",
    label: "FOUNDED",
    description: "Working successfully"
  },
  {
    value: "150+",
    label: "PROJECTS",
    description: "Successfully Completed"
  },
  {
    value: "10+",
    label: "COUNTRIES",
    description: "Our Services spread to"
  },
  {
    value: "30+",
    label: "EXPERTS",
    description: "Have More Than"
  }
];
