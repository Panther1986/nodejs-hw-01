import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const data = createFakeContact();
  let contacts;
  try {
    contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  } catch (error) {
    contacts = [];
  }

  const newContact = {
    ...data,
  };

  contacts.push(newContact);

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

  return newContact;
};

await addOneContact();
