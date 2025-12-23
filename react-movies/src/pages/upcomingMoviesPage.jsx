import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = () => {
  const { data: movies = [] } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingMovies,
  });

  const { addToMustWatch = () => {} } = useContext(MoviesContext) || {};

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={Array.isArray(movies) ? movies : []}
      selectFavorite={() => {}}
      action={(movie) => (
        <PlaylistAddIcon
          color="primary"
          onClick={() => addToMustWatch(movie)}
          style={{ cursor: "pointer" }}
        />
      )}
    />
  );
};

export default UpcomingMoviesPage;
