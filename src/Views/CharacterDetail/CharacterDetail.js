import React from 'react';
import Character from '../../Component/Character/Character';
import { useHistory } from 'react-router-dom';
import useFetchCharacter from '../../hooks/CustomHooks';

export default function CharacterDetail() {
  const history = useHistory();
  const [loading, character] = useFetchCharacter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push('/');
  };

  if (loading) return <p> Loading </p>;
  return (
    <div className="detail">
      <div>
        <Character {...{ character }} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
