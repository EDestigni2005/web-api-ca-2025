import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";

const TopRatedMoviesPage = () => {
  const { data: movies = [] } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={Array.isArray(movies) ? movies : []}
      selectFavorite={() => {}}
      action={() => null}
    />
  );
};

export default TopRatedMoviesPage;
