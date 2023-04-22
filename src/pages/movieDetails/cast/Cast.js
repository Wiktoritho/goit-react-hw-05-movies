import React from "react";
import { useParams } from "react-router-dom";
import useMovieActors from "../../../hooks/fetchMovieActors";
import css from "./Cast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const { actors, isLoading, error } = useMovieActors(movieId);

  const uniqueIds = new Set();

  const handleDuplicateIds = (actor) => {
    if (uniqueIds.has(actor.id)) {
      actor.id = Math.floor(Math.random() * 1000000);
    }
    uniqueIds.add(actor.id);
    return actor;
  };

  const processedActors = actors && actors.map(handleDuplicateIds);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!processedActors || processedActors.length === 0) {
    return <div>No actors found for this movie.</div>;
  }

  return (
    <>
      <h1 className={css.header}>Actors</h1>
      <ul className={css.list}>
        {processedActors.map((actor) => (
          <li key={actor.id} className={css.listItem}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </>
  );
}
