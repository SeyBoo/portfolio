import React, { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface ZoomInAnimationProps {
  className?: string;
}

export const ZoomInAnimation: FunctionComponent<
  PropsWithChildren<ZoomInAnimationProps>
> = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 1.5,
        delay: 0.25,
      }}
      variants={{
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0.5, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
