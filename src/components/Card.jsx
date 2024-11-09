// Card.jsx
import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ text, size, footer, isFooterActive, footerColor, reference }) => {
  return (
    <motion.div 
      drag 
      whileDrag={{ scale: 1.25 }}
      dragConstraints={reference}  // Apply the drag constraint from the parent container
      className='z-20 bg-zinc-900 h-56 w-52 rounded-3xl flex flex-col justify-between overflow-hidden'
    >
      <div className='p-5'>
        <FaFileAlt color='gray' />
        <h1 className='text-zinc-200 pt-5 text-sm'>{text}</h1>
      </div>
      <div className='footer flex justify-between px-5 pb-5'>
        <h5 className='text-zinc-200'>{size}</h5>
        <IoIosCloseCircle color='gray' />
      </div>
      {isFooterActive && (
        <h5
          className='text-center text-white py-2 w-full'
          style={{ backgroundColor: footerColor }}
        >
          {footer}
        </h5>
      )}
    </motion.div>
  );
};

export default Card;
