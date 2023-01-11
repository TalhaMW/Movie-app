const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  },
  fetchCrime: {
    title: 'Crime',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=80`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchFamily: {
    title: 'Family',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchMysteery: {
    title: 'Mystery',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchScienceFiction: {
    title: 'Science Fiction',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
  },
  fetchThriller: {
    title: 'Thriller',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=53`,
  },
  fetchWar: {
    title: 'War',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
  },
  fetchFantasy: {
    title: 'Fantasy',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=14`,
  },
  fetchAdventure: {
    title: 'Adventure',
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=12`,
  },
  //
};
