import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './Component/CharacterList/CharacterList';
import { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from './services/character';

function App() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacters();
      setCharacter(charactersData.results);
    };
    {
      fetchData();
    }
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CharacterList character={character} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
