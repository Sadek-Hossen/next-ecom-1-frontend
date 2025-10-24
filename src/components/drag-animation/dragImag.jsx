"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// data
const accordionData = [
  {
    id: 1,
    title: "Warm Bowl",
    description:
      "Light and fresh breakfast to brighten your morning.",
    longDescription:
      "Discover hidden valleys, pristine lakes, and breathtaking peaks.",
    imageUrl:
      "https://images.unsplash.com/photo-1692046394684-804459bffa71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    color: "bg-blue-500",
    accentColor: "#3B82F6",
  },
  {
    id: 2,
    title: "Cozy Plate",
    description:
      "A sweet and soft treat for early mornings.",
    longDescription:
      "White sand beaches stretch as far as the eye can see, with turquoise waters and spectacular sunsets.",
    imageUrl:
      "https://media.istockphoto.com/id/171269841/photo/french-toast-with-fruit-and-syrup-on-a-marble-countertop.webp?a=1&b=1&s=612x612&w=0&k=20&c=CjqqlzeQ-HElfUI6-O8nfWC_OHx60DJ6WuNxIBBgPN0=",
    color: "bg-yellow-500",
    accentColor: "#EAB308",
  },
  {
    id: 3,
    title: "Morning Joy",
    description:
      "Soft, rich, and soothing with every bite..",
    longDescription:
      "Ancient trees form a canopy overhead as you walk through dappled sunlight.",
    imageUrl:
      "https://media.istockphoto.com/id/938158500/photo/breakfast-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=r6fJXZOy54rij-7psWSVQ1aD8zFYcdqtLlc5Fj7zGeY=",
    color: "bg-green-500",
    accentColor: "#22C55E",
  },
  {
    id: 4,
    title: "Sweet Dawn",
    description: "A peaceful dinner for calm, quiet nights.",
    longDescription:
      "Marvel at the ever-changing landscape of golden dunes sculpted by the wind.",
    imageUrl:
      "https://media.istockphoto.com/id/2184633974/photo/beef-bacon-breakfast-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=wepVmkPA115_vPzVKLNT37g1KQDtkF6Ynz1e4ynRqc0=",
    color: "bg-orange-500",
    accentColor: "#F97316",
  },
];

const DragAnimat = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="relative flex flex-wrap gap-4 py-4 justify-center">
      {accordionData.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <motion.div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-full border-4"
            style={{
              borderColor: isExpanded ? "#fff" : "rgba(209, 213, 219, 0.5)",
            }}
            animate={{
              width: isExpanded ? "300px" : "80px",
              height: isExpanded ? "300px" : "80px",
              zIndex: isExpanded ? 10 : 0,
              boxShadow: isExpanded
                ? "0 10px 25px rgba(0,0,0,0.2)"
                : "0 4px 6px rgba(0,0,0,0.1)",
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              mass: 1,
            }}
            onClick={() => setExpandedIndex(index)}
            whileHover={{
              scale: isExpanded ? 1 : 1.05,
              borderColor: "#fff",
            }}
            initial={{
              width: index === 0 ? "300px" : "80px",
              height: index === 0 ? "300px" : "80px",
            }}
          >
            {/* Next.js Image */}
            <motion.div className="absolute inset-0">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{
                background: isExpanded
                  ? `radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 100%)`
                  : `radial-gradient(circle, transparent 10%, ${item.accentColor}99 100%)`,
              }}
              transition={{ duration: 0.6 }}
            />

            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12 },
                      },
                    }}
                  >
                    <motion.h3
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      className="text-2xl font-bold mb-3"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      className="text-sm mb-4"
                    >
                      {item.longDescription}
                    </motion.p>

                    <motion.button
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.95)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white text-black rounded-full font-medium mt-2"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.span
                    className="text-white font-bold"
                    animate={{ scale: [0.9, 1, 0.9], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {index + 1}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DragAnimat;
