import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";

const PopularMoviesPage = () => {
  const { data: movies = [] } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={Array.isArray(movies) ? movies : []}
      selectFavorite={() => {}}
      action={() => null}
    />
  );
};

export default PopularMoviesPage;
