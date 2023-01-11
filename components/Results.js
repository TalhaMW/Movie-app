import React from 'react';
import { Suspense } from 'react';
import Moviecard from './Moviecard';
import FlipMove from 'react-flip-move';
const Results = ({ data, heading }) => {
  console.log(data, '-->');
  if (!data) {
    return <h1>Loading ...</h1>;
  }
  return (
    <section className=' px-4 my-8'>
      <h1 className='text-3xl sm:text-5xl mb-8 ml-2 text-green-400 font-semibold sm:font-bold'>
        {heading}
      </h1>
      <FlipMove className='movie-grid '>
        {data?.results?.map((data) => (
          <Moviecard
            title={data.original_name ? data.original_name : data.title}
            description={data.overview}
            imgUrl={data.poster_path}
          />
        ))}
      </FlipMove>
    </section>
  );
};

export default Results;
