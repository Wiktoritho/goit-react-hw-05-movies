import React from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../../hooks/fetchMovieReviews";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const { reviews, isLoading, error } = fetchMovieReviews(movieId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>No reviews found for this movie.</div>;
  }

  return (
    <>
      <h1 className={css.header}>Reviews</h1>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.listItem}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.review}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
