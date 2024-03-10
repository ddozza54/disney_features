import { SyntheticEvent } from 'react';
import mickeyImage from '../src/assets/mickey.png';

const baseURL =
  'https://disney_api.nomadcoders.workers.dev/characters';

export const fetchDisneyCharacters = async () =>
  await fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.slice(200, 300);
    });

export const fetchCharacterData = async (id?: string) =>
  await fetch(`${baseURL}/${id}`).then((res) => res.json());

export const addDefaultImg = (
  e: SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = mickeyImage;
};
