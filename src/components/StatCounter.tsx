import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface StatCounterProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ icon: Icon, value, suffix = "", label }: StatCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <motion.span className="text-gray-900" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          {rounded}
        </motion.span>
        {suffix && <span className="text-gray-900" style={{ fontSize: '2.5rem', fontWeight: 700 }}>{suffix}</span>}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}
