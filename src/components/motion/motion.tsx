import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion.custom<BoxProps>(Box);

export const AnimatePage = ({ children }) => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <MotionBox
        as="main"
        animate="enter"
        exit="exit"
        flexGrow={1}
        initial="initial"
        variants={{
          initial: { opacity: 0, y: -200 },
          enter: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 250 }
        }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};
