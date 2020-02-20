import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieCard.scss'

export const MovieCard = ({title, posterPath, id}) => {
  return (
    <section className='movie-card'>
      <h2 className='movie-card-title'>{title}</h2>

    </section>
  )
}
