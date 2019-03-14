import fs from 'fs';
import util from 'util';
const writeFile = util.promisify(fs.writeFile);

export default async function setCompany(company) {
  return writeFile(
    `./data/companies/${company.id}.json`,
    JSON.stringify(company)
  );
}
