export async function getCharacters() {
  const response = await fetch(`https://breakingbadapi.com/api/characters`);
  const charactersData = await response.json();
  return charactersData;
}
