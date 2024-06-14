import React from 'react'
import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js'

// Focus on imageSize
// no need pass props through every child 

// function List({ imageSize }) {
  function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        // imageSize={imageSize}
      />
    </li>
  );
  return <ul style={{ display: 'flex' }}>{listItems}</ul>;
}

// function Place({ place, imageSize }) {
  function Place({ place }) {
  return (
    <div style={{ display: 'table-caption', marginRight: '5px' }}>
      <PlaceImage
        place={place}
        // imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </div>
  );
}

// function PlaceImage({ place, imageSize }) {
  function PlaceImage({ place }) {
  // add useContext to access props where you need
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

function UseContext() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 200 : 150;

  return (
    // Need provider wrapper in which tree need props
    <ImageSizeContext.Provider value={imageSize}>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
         
        {/* without context pass props */}
        {/* <List imageSize={imageSize} /> */} 
        <List />

      </div>
    </ImageSizeContext.Provider>
  )
}

export default UseContext;