import React from 'react';
import Movie from './Movie';
import blackmirror from './images/blackMirror.jpeg';
import breakingBad from './images/breakingBad.jpeg';
import deathNote from './images/deathNote.jpeg';
import gameOfTrones from './images/fameOfThrones.jpeg';
import walkingDead from './images/walkingDead.jpeg';
import theWire from './images/theWire.jpeg';


export default function Gallery() {
    return (
      <div>
        <div className="container">
          <Movie id='blackMirror' name="Black Mirror" logo={blackmirror} />
          <Movie id='breakingBad' name="Breaking Bad" logo={breakingBad} />
          <Movie id='deathNote' name="Deadh Note" logo={deathNote} />
        </div>
        <div className="container">
          <Movie id='gameOfTrones' name="Game of Thrones" logo={gameOfTrones} />
          <Movie id='walkingDead' name="The Walking Dead" logo={walkingDead} />
          <Movie id='theWire' name="The Wire" logo={theWire} />
        </div>
      </div>
    );
  }