import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface VisionMissionCardProps {
  icon: LucideIcon;
  title: string;
}

export function VisionMissionCard({ icon: Icon, title }: VisionMissionCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-3">
        {title === "Vision" ? "We strive to achieve our goals through teamwork, transparency, and strong collaboration with our clients, consultants, partners, and suppliers. By continuously adopting the latest technologies and innovative management practices, we ensure every project meets the highest international construction standards."
        : "We are dedicated to building infrastructure that not only meets expectations but consistently exceeds them, driven by the expertise and commitment of our highly motivated team. In today’s competitive market, our priority is to continuously enhance our performance and elevate the quality of our services—ensuring the complete satisfaction of every client we serve."}
      </p>
            <p className="text-gray-600 leading-relaxed">
        {title === "Vision" ? "We are dedicated to promoting and utilizing eco-friendly, sustainable, and GREEN solutions—contributing to a cleaner environment and supporting the vision and growth of Qatar."
        : " "}
      </p>
    </motion.div>
  );
}
