import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const InViewAnimateOnce: React.FC<{
  className: string;
  hidden: any;
  visible: any;
  transition: any;
  children: any;
  amount?: number;
}> = ({ className, hidden, visible, transition, amount, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount == undefined ? 'some' : amount }}
      transition={transition}
      variants={{
        visible: visible,
        hidden: hidden
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimateOnce;
