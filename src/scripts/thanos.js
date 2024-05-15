import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = contacts.length - 1; i >= 0; i--) {
      if (Math.random() > 0.5) {
        contacts.splice(i, 1);
      }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
  } catch (error) {
    console.error('Ups', error);
  }
};

await thanos();
