import React from 'react';
import ReqObj from '../utils';
import Link from 'next/link';

console.log('===> REQ OBJ', ReqObj);
const Nav = () => {
  const fetchAndCreateElement = () => {
    const genreArray = [];
    for (let prop in ReqObj) {
      genreArray.push({ key: prop, value: ReqObj[prop] });
    }

    return genreArray.map((elem) => {
      return (
        <Link href={`${elem.key}`}>
          <h2
            className='visited:text-green-400 transform mx-4 sm:mx-8 hover:scale-125 whitespace-nowrap hover:text-white cursor-pointer transition-all duration-700 ease-out active:text-green-400 '
            key={elem.title}
          >
            {elem.value.title}
          </h2>
        </Link>
      );
    });
  };

  return (
    <nav className='mt-5 relative'>
      <div className='flex px-3 sm:px-6  text-lg sm:text-2xl overflow-scroll scrollbar-hide'>
        {fetchAndCreateElement()}
        <div className='absolute top-0 bottom-0  right-0 bg-gradient-to-l from-[#0f2630]  h-12 w-1/12'></div>
      </div>
    </nav>
  );
};

export default Nav;
