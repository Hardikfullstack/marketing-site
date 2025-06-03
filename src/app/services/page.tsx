'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
            >
              Our Services
            </motion.h1>

            <div className="space-y-20">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                      <Image src={service.image} alt={service.title} fill className="object-cover rounded-lg" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const detailedServices = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
    features: [
      'Social Media Marketing',
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising',
      'Email Marketing Campaigns',
      'Content Marketing Strategy',
    ],
    image: "/digital-marketing.png",
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that tells your story and connects with your audience.',
    features: [
      'Video Production',
      'Photography Services',
      'Copywriting',
      'Graphic Design',
      'Social Media Content',
    ],
    image: "/content-creation.png",
  },
  {
    title: 'Brand Strategy',
    description: 'Strategic brand development to help you stand out in the market.',
    features: [
      'Brand Identity Development',
      'Market Research',
      'Competitor Analysis',
      'Brand Guidelines',
      'Brand Voice Development',
    ],
    image: "/brand-strategy.png",
  },
]; 

