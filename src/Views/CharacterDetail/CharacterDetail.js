import React from 'react';

export default function CharacterDetail({ Characters }) {
  return (
    <div className="detail">
      {Characters.map((char) => (
        <p key={char.id}>
          {char.Characters}
          <p> Nickname: {char.nickname}</p>
          <p> Occupation: {char.occupation}</p>
        </p>
      ))}
    </div>
  );
}
