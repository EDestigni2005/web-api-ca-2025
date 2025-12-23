import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getMovieRecommendations } from "../api/tmdb-api";

const RecommendationsPage = () => {
  const { id } = useParams();
  const { data: movies = [] } = useQuery({
    queryKey: ["recommendations", { id }],
    queryFn: getMovieRecommendations,
  });

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={Array.isArray(movies) ? movies : []}
      selectFavorite={() => {}}
      action={() => null}
    />
  );
};

export default RecommendationsPage;
