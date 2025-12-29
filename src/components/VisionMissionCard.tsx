
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface VisionMissionCardProps {
  icon: any;
  title: string;
  gradient: string;
  image: string;
}

export function VisionMissionCard({ icon: Icon, title, gradient, image }: VisionMissionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visionText = {
    main: "We strive to achieve our goals through teamwork, transparency, and strong collaboration with our clients, consultants, partners, and suppliers. By continuously adopting the latest technologies and innovative management practices, we ensure every project meets the highest international construction standards.",
    additional: "We are dedicated to promoting and utilizing eco-friendly, sustainable, and GREEN solutions—contributing to a cleaner environment and supporting the vision and growth of Qatar."
  };

  const missionText = {
    main: "We are dedicated to building infrastructure that not only meets expectations but consistently exceeds them, driven by the expertise and commitment of our highly motivated team. In today's competitive market, our priority is to continuously enhance our performance and elevate the quality of our services—ensuring the complete satisfaction of every client we serve.",
    additional: ""
  };

  const content = title === "Vision" ? visionText : missionText;

  return (
    <motion.div
      layout
      className="relative rounded-3xl min-h-[550px] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col min-h-[550px]">
        {/* Top Section - Icon */}
        <div className="flex justify-between items-start">
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
            {content.main}
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
            {content.additional && (
              <div className="pt-4 border-t border-white/30 mt-2 mb-4">
                <p className="text-white/90 leading-relaxed drop-shadow-lg text-sm">
                  {content.additional}
                </p>
              </div>
            )}
          </motion.div>

          {content.additional && (
            <motion.button
              className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 font-medium shadow-lg border border-white/20"
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
          )}
        </div>
      </div>
    </motion.div>
  );
}