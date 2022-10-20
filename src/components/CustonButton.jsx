import React from "react";
import { motion } from "framer-motion";

const CustonButton = ({ children, className }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <button className={className}>{children}</button>
    </motion.span>
  );
};

export default CustonButton;
