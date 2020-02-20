import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieCard.scss'

export const MovieCard = ({title, posterPath, id, averageRating}) => {
  return (
    <section className='movie-card' id={id}>
      <img className='poster-img' alt={`movie poster for ${title}`} src={posterPath} />
      <h1 className='movie-card-title'>{title}</h1>
      <footer className='ratings-footer'>
        <h2 className='movie-rating'>{`Rating: ${averageRating}/10`}</h2>
      </footer>
    </section>
  )
}
