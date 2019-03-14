import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);

export default async function getCompany(id) {
  const data = await readFile(`./data/companies/${id}.json`, 'utf8');
  return JSON.parse(data);
}
