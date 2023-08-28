export const getFilterMovies = (movies, str) => {
  const filter = movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(str.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(str.toLowerCase())
    );
  });
  return filter;
};

export const getShortMovies = (movies) => {
  const shortMovies = movies.filter((movie) => {
    return movie.duration <= 40;
  });
  return shortMovies;
};
