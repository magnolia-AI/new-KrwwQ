"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized solutions.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
    title: "Secure & Reliable",
    description: "Your data is safe with our robust security measures.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Ready to Scale",
    description: "Build for today, with the future in mind. Scale as you grow.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-12"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

