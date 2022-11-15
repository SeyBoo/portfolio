import React, { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface FromTheTopAnimationProps {
  duration?: number;
  delay?: number;
  startY?: number;
  className?: string;
}

export const FromTheTopAnimation: FunctionComponent<
  PropsWithChildren<FromTheTopAnimationProps>
> = ({ duration = 1.5, delay = 0.25, startY = -100, className, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      transition={{
        type: 'spring',
        bounce: 0.3,
        duration: duration,
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: startY, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
