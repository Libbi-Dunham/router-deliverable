import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterList from './Component/CharacterList/CharacterList';
import { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from './services/character';

function App() {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacters();

      setCharacter(charactersData);
      setLoading(false);
    };
    {
      fetchData();
    }
  }, [loading]);

  if (loading) return <p> loading </p>;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CharacterList character={character} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
