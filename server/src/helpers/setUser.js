import fs from 'fs';
import util from 'util';
const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  return writeFile(`./data/users/${user.id}.json`, JSON.stringify(user));
}
