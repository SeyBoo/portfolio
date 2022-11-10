import { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FromTheTopAnimationProps {
  duration?: number;
  delay?: number;
  startY?: number;
  className?: string;
}

const FromTheTopAnimation: FunctionComponent<
  PropsWithChildren<FromTheTopAnimationProps>
> = ({ duration = 1.5, delay = 0.25, startY = -100, className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: startY, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: duration,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FromTheTopAnimation;
