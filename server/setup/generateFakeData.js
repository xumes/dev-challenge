import faker from 'faker';
import uuid from 'uuid/v4';
import fs from 'fs';

const RECORDS = 2000;
const MAX_FRIENDS = 10;
const MIN_FRIENDS = 1;

const companyIds = [];
const userIds = [];
const users = {};

const rand = (min, max) => Math.floor(Math.random() * max) + min;

const address = () => ({
  zipCode: faker.address.zipCode(),
  city: faker.address.city(),
  cityPrefix: faker.address.cityPrefix(),
  citySuffix: faker.address.citySuffix(),
  streetName: faker.address.streetName(),
  streetAddress: faker.address.streetAddress(),
  streetSuffix: faker.address.streetSuffix(),
  streetPrefix: faker.address.streetPrefix(),
  secondaryAddress: faker.address.secondaryAddress(),
  county: faker.address.county(),
  country: faker.address.country(),
  state: faker.address.state(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude()
});

function generate() {
  for (let i = 0; i < RECORDS; i++) {
    const company = {
      id: uuid(),
      color: faker.internet.color(),
      image: faker.image.business(),
      name: faker.company.companyName(),
      suffice: faker.company.companySuffix(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs(),
      address: address()
    };

    companyIds.push(company.id);

    fs.writeFileSync(
      `./data/companies/${company.id}.json`,
      JSON.stringify(company)
    );

    console.log(Date.now(), `creating company ${i}`);
  }

  for (let i = 0; i < RECORDS; i++) {
    let friends = [];

    if (i > MAX_FRIENDS) {
      for (let j = 0; j < rand(MIN_FRIENDS, MAX_FRIENDS); j++) {
        friends.push(userIds[rand(0, userIds.length - 1)]);
      }
    }

    let company = null;

    if (rand(0, 10) > 3) {
      company = companyIds[rand(0, companyIds.length - 1)];
    }

    const user = {
      id: uuid(),
      image: faker.image.avatar(),
      color: faker.internet.color(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: address(),
      company,
      friends
    };

    userIds.push(user.id);

    users[user.id] = user;

    fs.writeFileSync(`./data/users/${user.id}.json`, JSON.stringify(user));

    console.log(Date.now(), `creating user ${i}`);
  }

  console.log(Date.now(), 'done!');
}

export default generate;
