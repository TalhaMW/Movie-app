import React from 'react';
import Image from 'next/image';
import { forwardRef } from 'react';
import Link from 'next/link';
const Moviecard = forwardRef(({ title, description, imgUrl, id }, ref) => {
  return (
    <Link href={`movie/${id}`}>
      <div
        ref={ref}
        className='movie-card shadow-2xl'
      >
        {/* <img
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        className='w-full'
      /> */}
        <Image
          layout='responsive'
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          width={1920}
          height={1080}
          alt='Img'
        />
        <p className='line-clamp-3'>{description}</p>
        <h3 className='text-xl my-2 font-semibold text-green-400'>{title}</h3>
      </div>
    </Link>
  );
});

export default Moviecard;
