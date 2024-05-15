import { log } from 'node:console';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const data = createFakeContact(number);
  try {
    await fs.appendFile(PATH_DB, JSON.stringify(data), 'utf8');
    console.log('Contacts created successfully');
  } catch (error) {
    console.error('Помилка', error);
  }
};

await generateContacts(10);
