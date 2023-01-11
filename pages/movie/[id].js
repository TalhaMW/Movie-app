import React from 'react';
import Image from 'next/image';
import FlipMove from 'react-flip-move';

const MovieDetail = ({ data }) => {
  console.log(JSON.parse(data));
  const parsedData = JSON.parse(data);
  return (
    <div className=' mt-8 p-4 font-medium'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          parsedData.poster_path || parsedData.backdrop_path
        }
        `}
        width={180}
        height={200}
        alt='img'
      />
      <div className='text text-slate-400 text-lg  py-3'>
        <div className=''>
          <span>Genre</span>
          <span className='movie-stats '>Action</span>
        </div>
        <div className='language'>
          <span>Language</span>
          <span className='movie-stats '>en</span>
        </div>
        <div className='text-green-400 py-2 text-4xl font-bold'>
          {parsedData.original_title || parsedData.title}
        </div>
        <p className='max-width-description my-4 text-white'>
          {parsedData.overview}
        </p>
        <p className='popularity'>
          <span>popularity</span>
          <span className='movie-stats'>{parsedData.popularity}</span>
        </p>
        <div>
          <span>Production Company</span>
          <span className='movie-stats '>
            {parsedData.production_companies?.map((company) => (
              <span className='mr-6'>{company.name}</span>
            ))}
          </span>
        </div>
        <div>
          <span>Origin country</span>
          <span className='movie-stats '>
            {parsedData.production_countries?.map((company) => (
              <span className='mr-6'>{company.name}</span>
            ))}
          </span>
        </div>
        <div>
          <span>Release date</span>
          <span className='movie-stats '>{parsedData.release_date}</span>
        </div>
        <div>
          <span>Revenue</span>
          <span className='movie-stats '>{parsedData.revenue} $</span>
        </div>
        <div>
          <span>Length</span>
          <span className='movie-stats '>{parsedData.runtime}</span>
        </div>
        <div>
          <span>Status</span>
          <span className='movie-stats '>{parsedData.status}</span>
        </div>
        <div>
          <span>Tag line</span>
          <span className='movie-stats'>{parsedData.tagline || 'NA'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function getServerSideProps(ctx) {
  console.log(ctx);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const data = await response.json();
  return { props: { data: JSON.stringify(data) } };
}
