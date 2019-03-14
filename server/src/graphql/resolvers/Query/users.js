import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);

import { getUser } from '../../../helpers';

export default async function users(root, args, { ctx }, info) {
  const files = await readDir('./data/users');

  // todo: 3. can we accept a query parameter to only show certain users? Maybe by name to begin with.
  // todo: 5. getting this list is slow, for some reason.  Would be cool if it could return all the users a lot faster after the first query.

  const users = files
    .filter(filename => filename.includes('.json'))
    .map(filename => getUser(filename.replace('.json', '')));

  return users;
}
