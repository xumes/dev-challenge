import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);

export default async function getUser(id) {
  const data = await readFile(`./data/users/${id}.json`, 'utf8');
  return JSON.parse(data);
}
