import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const createFakeContact = async (number) => {
  let fakeContacts;
  let newContacts = {
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    fakeContacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      fakeContacts.push(newContacts);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(fakeContacts, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
  return newContacts;
};

createFakeContact();
