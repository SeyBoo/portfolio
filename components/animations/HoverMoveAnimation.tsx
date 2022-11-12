import { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const HoverMoveAnimation: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -15,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default HoverMoveAnimation;
