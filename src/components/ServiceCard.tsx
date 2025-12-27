import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  image: string;
  gradient: string;
}

export function ServiceCard({ icon: Icon, title, description, details, image, gradient }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="mb-4 text-gray-900">{title}</h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden w-full"
        >
          <div className="pt-4 border-t border-gray-200 mt-2">
            <p className="text-gray-700 leading-relaxed">
              {details}
            </p>
          </div>
        </motion.div>

        <button className={`mt-4 bg-gradient-to-r ${gradient} text-white px-6 py-2 rounded-full hover:shadow-lg transition-all flex items-center gap-2`}>
          {isExpanded ? "Show Less" : "Learn More"}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}