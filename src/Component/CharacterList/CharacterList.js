import React from 'react';

export default function CharacterList({ character }) {
  return (
    <div className="list">
      {character.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
          <p>
            <img alt={char.name} src={char.img}></img>
          </p>
          <p>Name: {char.name}</p>
          <p>Nickname: {char.nickname}</p>
          <p>Occupation: {char.occupation}</p>
        </p>
      ))}
    </div>
  );
}
