import React from "react";
import { motion } from "framer-motion";
const LoadingPage = () => {
  const loadingContainer = {
    width: "100%",

    display: "flex",
    justifyContent: " center",
    alignItems: "center",
    gap: ".5rem",
  };
  const loadingCircle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    background: "linear-gradient(to right,#543483d3, #e94560c7 )",
    borderRadius: "2.5rem",
    fontSize: "24px",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.4,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "-30%",
    },
    end: {
      y: "30%",
    },
  };
  const loadingCircleTransition = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return (
    <div>
      <div className="loading-page">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
          className="text-white"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            A
          </motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            s
          </motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            h
          </motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            u
          </motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            t
          </motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            o
          </motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            s
          </motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          >
            h
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingPage;
