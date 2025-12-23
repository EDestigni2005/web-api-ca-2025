import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";

const NowPlayingMoviesPage = () => {
  const { data: movies = [] } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlayingMovies,
  });

  return (
    <PageTemplate
      title="Now Playing"
      movies={Array.isArray(movies) ? movies : []}
      selectFavorite={() => {}}
      action={() => null}
    />
  );
};

export default NowPlayingMoviesPage;
