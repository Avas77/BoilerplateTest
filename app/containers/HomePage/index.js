/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './styles.css';

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="header">
        View our Image Gallery with 100+ photos on demand
      </h1>
      <a className="btn" href="/images">
        Get Started
      </a>
    </div>
  );
}
