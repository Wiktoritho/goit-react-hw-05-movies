import React from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from '../../../hooks/fetchMovieReviews';
import css from './Reviews.module.css';
import parse from 'html-react-parser';

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
  console.log(reviews[1].content);
  return (
    <>
      <h1 className={css.header}>Reviews</h1>
      <ul className={css.list}>
        {reviews.map(review => {
          const parsed = parse(review.content)
          return (
          <li key={review.id} className={css.listItem}>
            <h3 className={css.author}>{review.author}</h3>

            <p className={css.review}>{parsed}</p>
          </li>);
        })}
      </ul>
    </>
  );
}
