import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface VisionMissionCardProps {
  icon: LucideIcon;
  title: string;
  gradient: string;
  image: string;
}

export function VisionMissionCard({ icon: Icon, title, gradient, image }: VisionMissionCardProps) {
  return (
    <motion.div
      className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Image Background */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-white mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>{title}</h3>
        </div>
      </div>

      <div className="p-8">
        <p className="text-gray-600 leading-relaxed mb-3">
          {title === "Vision" ? "We strive to achieve our goals through teamwork, transparency, and strong collaboration with our clients, consultants, partners, and suppliers. By continuously adopting the latest technologies and innovative management practices, we ensure every project meets the highest international construction standards."
            : "We are dedicated to building infrastructure that not only meets expectations but consistently exceeds them, driven by the expertise and commitment of our highly motivated team. In today’s competitive market, our priority is to continuously enhance our performance and elevate the quality of our services—ensuring the complete satisfaction of every client we serve."}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {title === "Vision" ? "We are dedicated to promoting and utilizing eco-friendly, sustainable, and GREEN solutions—contributing to a cleaner environment and supporting the vision and growth of Qatar."
            : " "}
        </p>
      </div>
    </motion.div>
  );
}