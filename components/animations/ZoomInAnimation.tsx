import { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface ZoomInAnimationProps {
  className?: string;
}
const ZoomInAnimation: FunctionComponent<
  PropsWithChildren<ZoomInAnimationProps>
> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInAnimation;
