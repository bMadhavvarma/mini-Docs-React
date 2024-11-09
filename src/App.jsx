// App.jsx
import React, { useRef } from 'react';
import Background from './components/Background';
import Card from './components/Card';

const App = () => {
  const ref = useRef(null); // Reference for drag constraints

  const cardData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: ".9mb",
      footer: "Download",
      isFooterActive: true,
      footerColor: "green"
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      size: ".4mb",
      footer: "Upgrade",
      isFooterActive: true,
      footerColor: "blue"
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      size: "1.2mb",
      footer: "Download",
      isFooterActive: false
    },
  ];

  return (
    <div className='bg-zinc-800 w-full h-screen p-10'>
      <div className="absolute inset-0 z-0 flex justify-center">
        <Background />
      </div>
      <div 
        className='flex space-x-4 z-10' 
        ref={ref}
        style={{ width: '100%', height: '100%' }} // Make sure the parent has full screen size
      >
        {cardData.map((item, index) => (
          <Card
            reference={ref}  // Pass the ref to each Card
            key={index}
            text={item.text}
            size={item.size}
            footer={item.footer}
            isFooterActive={item.isFooterActive}
            footerColor={item.footerColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
