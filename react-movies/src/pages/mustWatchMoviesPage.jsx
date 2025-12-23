import React, { useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const asArray = (v) => {
  if (Array.isArray(v)) return v;
  if (v && Array.isArray(v.results)) return v.results; // handle cached objects
  return [];
};

const MustWatchMoviesPage = () => {
  const { mustWatch } = useContext(MoviesContext);
  const qc = useQueryClient();

  // pull possible lists from cache without refetching
  const buckets = [
    qc.getQueryData(["upcoming"]),
    qc.getQueryData(["nowPlaying"]),
    qc.getQueryData(["popular"]),
    qc.getQueryData(["topRated"]),
    qc.getQueryData(["discover"]),
    qc.getQueryData(["movies"]),
  ];

  // build a lookup of all cached movies by id
  const byId = useMemo(() => {
    const map = new Map();
    for (const b of buckets) {
      for (const m of asArray(b)) {
        if (m && m.id != null) map.set(m.id, m);
      }
    }
    return map;
  }, [buckets.map((b) => (b ? 1 : 0)).join(",")]);

 
  const movies = (mustWatch || []).map((id) => byId.get(id)).filter(Boolean);

  return (
    <PageTemplate
      title="Must Watch"
      movies={movies}
      selectFavorite={() => {}}
      action={() => null}
    />
  );
};

export default MustWatchMoviesPage;
