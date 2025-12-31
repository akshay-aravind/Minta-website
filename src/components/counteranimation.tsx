import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1000, bounce: 0 });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    spring.on("change", (v) => setDisplay(Math.floor(v)));
    if (isInView) count.set(target);
  }, [isInView, count, spring, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
