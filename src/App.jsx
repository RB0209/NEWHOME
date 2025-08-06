
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image1 from "./assets/img1.jpg";
import Image2 from "./assets/img2.jpg";
import Image3 from "./assets/img3.jpg";
import Image4 from "./assets/img4.jpg";
import Image5 from "./assets/img5.jpg";
import Image6 from "./assets/img6.jpg";
import Image7 from "./assets/img7.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export default function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-xl"
        >
          Feeding Hope, One Hand at a Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mt-4 drop-shadow-lg"
        >
          Niyati CARE Foundation
        </motion.p>
      </div>

      {/* Our Mission */}
      <div className="py-20 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#38b6ff] mb-6">
            We serve the forgotten.
          </h2>
          <p className="text-xl">We reach the neglected.</p>
          <p className="text-xl mt-2">We feed the hungry.</p>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="px-4 md:px-16 py-16 bg-gray-100">
        <h3 className="text-2xl md:text-3xl text-center text-[#38b6ff] font-semibold mb-10">
          Real stories. Real faces. Real change.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-80 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 md:px-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-[#38b6ff] mb-4">Meals Distributed: 25,000+</h4>
          <h4 className="text-2xl font-semibold text-[#38b6ff] mb-4">Families Supported: 3,000+</h4>
          <h4 className="text-2xl font-semibold text-[#38b6ff]">Volunteers in Action: 100+</h4>
        </motion.div>
      </div>

      {/* CTA Lines */}
      <div className="bg-[#38b6ff] text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Stand with us.</h2>
          <p className="text-xl mt-2">Share hope.</p>
          <p className="text-xl mt-2">Change lives.</p>
        </motion.div>
      </div>
    </div>
  );
}
