import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../../services/character';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacterById(id);
      setCharacter(characterData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <p> Loading </p>;
  return (
    <div className="detail">
      <div>
        <Character {...character} />
      </div>
    </div>
  );
}
