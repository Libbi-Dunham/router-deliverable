import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function CharacterList({ character }) {
  return (
    <div className="list">
      <h1>Choose a Character</h1>
      {character.map((char) => (
        <div className="char" key={char.char_id}>
          {char.character}
          <h2>{char.name}</h2>
          <Link key={char.char_id} to={`character/${char.char_id}`}>
            <img alt={char.name} src={char.img}></img>
          </Link>
        </div>
      ))}
    </div>
  );
}
