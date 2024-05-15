import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async (number) => {
  const data = createFakeContact(number);
  try {
    await fs.appendFile(PATH_DB, JSON.stringify(data), 'utf8');
    console.log('Contact created successfully');
  } catch (error) {
    console.error('Помилка', error);
  }
};

await addOneContact(1);
