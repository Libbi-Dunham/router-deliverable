import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../services/character';

export default function useFetchCharacter() {
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
  return [loading, character];
}
