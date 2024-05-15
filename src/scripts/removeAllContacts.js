import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
};

await removeAllContacts();
