import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../../services/character';
import Character from '../../Component/Character/Character';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacterById(id);
      setCharacter(characterData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

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
