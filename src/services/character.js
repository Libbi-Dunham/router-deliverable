export async function getCharacters() {
  const response = await fetch(`https://breakingbadapi.com/api/characters`);
  const charactersData = await response.json();
  return charactersData;
}

export async function getCharacterById(id) {
  const response = await fetch(`https://breakingbadapi.com/api/characters/${id}`);
  const characterData = await response.json();
  return characterData[0];
}
