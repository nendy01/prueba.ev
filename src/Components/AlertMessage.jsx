import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
const AlertMessage = ({ message }) => {
  const animacion = {
    hidden: { ScaleY: 0 },
    visible: { scaleY: 1 },
    transition: { duration: 0.9 },
  };

  return (
    <Box
      bg="red.500"
      py={8}
      pl={4}
      as={motion.div}
      initial="hidden"
      animate={message ? "visible" : "hidden"}
      exit="hidden"
      variants={animacion}
    >
      {message}
    </Box>
  );
};

export default AlertMessage;
