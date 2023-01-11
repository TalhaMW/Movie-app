import React from 'react';
import fetchObj from '../utils';
import { Results } from '../components';
const genre = ({ data }) => {
  console.log(JSON.parse(data));
  if (!JSON.parse(data)) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <Results data={JSON.parse(data)} />
    </div>
  );
};

export default genre;

export async function getServerSideProps(ctx) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${fetchObj[ctx.query.id].url}`
    );
    const data = await response.json();
    console.log(data);
    return { props: { data: JSON.stringify(data) } };
  } catch (error) {
    console.log('eroor is ---->', error);
  }
}
