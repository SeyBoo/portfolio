import React, { FunctionComponent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export const FromTheRightAnimation: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        duration: 1.5,
        delay: 0.25,
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};
