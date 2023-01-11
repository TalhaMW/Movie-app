import React from 'react';

const HeaderItem = ({ Icon, text }) => {
  return (
    <div className='group  mb-1 flex flex-col items-center justify-center hover:text-white w-12 sm:w-20  mr-1'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce cursor-pointer' />
      <p className='opacity-0 tracking-wider group-hover:opacity-100 transition-all duration-500 cursor-pointer'>
        {text}
      </p>
    </div>
  );
};

export default HeaderItem;
