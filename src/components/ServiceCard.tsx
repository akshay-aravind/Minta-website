import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight, Wrench, Zap, Shield } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  details: string;
  image: string;
  galleryImages?: string[];
  gradient: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  details,
  image,
  galleryImages = [],
  gradient
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [image, ...galleryImages];
  const isFirstImage = currentImageIndex === 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <motion.div
      layout
      className="relative rounded-3xl min-h-[550px]  h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={allImages[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Only on first image */}
          {isFirstImage && (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Always visible on left and right */}
      {allImages.length > 1 && (
        <>
          {/* Left Arrow */}
          <motion.button
            onClick={prevImage}
            className="absolute  left-4 top-3/4 sm:mt-0 sm:top-1/2 mt-7 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all text-white border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={nextImage}
            className="absolute right-4 top-3/4 mt-7 sm:mt-0 sm:top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all text-white border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      {/* Content - Only visible on first image */}
      <AnimatePresence>
        {isFirstImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 p-8 flex flex-col h-full"
          >
            {/* Top Section - Icon */}
            <div className="flex justify-between items-start ">
              <motion.div
                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            {/* Bottom Section - Content */}
            <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer my-auto">
              <motion.h3
                className="mb-4 text-white text-3xl font-bold drop-shadow-2xl"
                layout
              >
                {title}
              </motion.h3>

              <motion.p
                className="text-white/95 mb-4 leading-relaxed drop-shadow-lg text-base"
                layout
              >
                {description}
              </motion.p>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/30 mt-2 mb-4">
                  <p className="text-white/90 leading-relaxed drop-shadow-lg text-sm">
                    {details}
                  </p>
                </div>
              </motion.div>

              <motion.button
                className="bg-white/20 backdrop-blur-md mx-auto sm:mx-0 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 font-medium shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? "Show Less" : "Learn More"}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isFirstImage && (
        <motion.button
          onClick={() => setCurrentImageIndex(0)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-5 py-5 bg-white/90 backdrop-blur-xl text-[#111] cursor-pointer rounded-full shadow-lg border border-white/30 hover:bg-white/60 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      )}


      {/* Thumbnail Indicators - Always visible at bottom */}
      {allImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {allImages.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${idx === currentImageIndex
                ? "w-8 bg-white shadow-lg"
                : "w-2 bg-white/50 hover:bg-white/70"
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Image Counter - Only visible when not on first image */}
      {!isFirstImage && allImages.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-xl"
        >
          {currentImageIndex + 1} / {allImages.length}
        </motion.div>
      )}
    </motion.div>
  );
}

