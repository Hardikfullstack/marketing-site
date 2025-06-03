'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '@/constants/socialLinks';

const Footer = () => {
  const footerSections = [
    {
      title: 'Brand',
      content: (
        <p className="text-sm text-input-default-White">
          Your premier destination for creative marketing and entertainment solutions.
        </p>
      ),
    },
    {
      title: 'Quick Links',
      content: (
        <ul className="space-y-2">
          <li><Link href="/" className="text-input-default-White hover:underline">Home</Link></li>
          <li><Link href="/services" className="text-input-default-White hover:underline">Services</Link></li>
          <li><Link href="/contact" className="text-input-default-White hover:underline">Contact</Link></li>
        </ul>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <ul className="space-y-2 text-sm">
          <li className="text-input-default-White">123 Marketing Street</li>
          <li className="text-input-default-White">City, Country</li>
          <li className="text-input-default-White">contact@marketingcompany.com</li>
          <li className="text-input-default-White">+1 234 567 890</li>
        </ul>
      ),
    },
    {
      title: 'Follow Us',
      content: (
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center"
            >
              <span className="text-input-default-White">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-background-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-input-default-White">{section.title}</h3>
              {section.content}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white text-center text-sm"
        >
          <p className="text-input-default-White">© {new Date().getFullYear()} Brand. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 