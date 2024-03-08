const baseURL =
  'https://disney_api.nomadcoders.workers.dev/characters';

export const fetchDisneyCharacters = async () =>
  await fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => data.slice(100));

export const fetchCharacterData = async (id?: string) =>
  await fetch(`${baseURL}/${id}`).then((res) => res.json());
