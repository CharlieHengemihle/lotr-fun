import { client, checkError } from './client.js';

export async function getFilms() {
  const response = await client.from('films').select(`*`);
  return checkError(response);
}

export async function getBooks() {
  const response = await client.from('books').select(`*`);
  return checkError(response);
}

export async function getCharacters() {
  const response = await client.from('characters').select(`*`);
  return checkError(response);
}
