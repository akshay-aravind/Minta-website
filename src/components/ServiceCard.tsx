import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

export function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-start">
        <div className="w-16 h-16 bg-linear-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
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

        <button className="mt-4 text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
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
