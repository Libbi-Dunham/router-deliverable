import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ character }) {
  return (
    <div className="list">
      {character.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
          <Link key={char.id} to={`character/${char.id}`}>
            <img alt={char.name} src={char.img}></img>
          </Link>
          <p>Name: {char.name}</p>
          {/* <p>Nickname: {char.nickname}</p>
          <p>Occupation: {char.occupation}</p> */}
        </p>
      ))}
    </div>
  );
}
