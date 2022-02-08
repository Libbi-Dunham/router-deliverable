import React from 'react';

export default function Character({ character, handleSubmit }) {
  return (
    <>
      <div className="character">
        <h2> {character.name} </h2>
        <img src={character.img}></img>
        <h2> {character.nickname} </h2>
        <h2> {character.occupation} </h2>
        <h2> {character.status} </h2>
      </div>
      <div>
        <button className="button" onClick={handleSubmit}>
          Back to Characters
        </button>
      </div>
    </>
  );
}
