import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './Loading.scss'

export const Loading = () => {
  return (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  )
}