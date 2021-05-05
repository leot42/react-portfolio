import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{"props"}</h1>
      <p>{"Projects"}</p>
      <PhotoList />
    </section>
  );
}
export default Gallery;
