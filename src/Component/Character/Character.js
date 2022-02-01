import React from 'react';

export default function Character({ character }) {
  return (
    <div className="character">
      <h2> {character.name} </h2>
      <img src={character.img}></img>
      <h2> {character.nickname} </h2>
      <h2> {character.occupation} </h2>
    </div>
  );
}
