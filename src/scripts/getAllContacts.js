import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const allContacts = JSON.parse(data);
  return allContacts;
};

console.log(await getAllContacts());
