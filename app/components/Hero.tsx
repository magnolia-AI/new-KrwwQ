"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div
      className="relative flex-grow flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519681577576-f83616641697?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      <div className="relative z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"
        >
          Discover a New Digital Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md"
        >
          We build modern, performant, and beautiful web applications that bring your ideas to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-xl">
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

