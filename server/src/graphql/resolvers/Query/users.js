import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);

import { getUser } from '../../../helpers';

export default async function users(root, args, { ctx }, info) {
  const files = await readDir('./data/users');

  // todo: 3. can we accept a input variable into the graphql query to only show certain users? Maybe allowing
  //  filter by name to begin with.

  // todo: 5. getting this list of all users is slow.  Would be really cool if it could return all the users
  //  in a more performant way.  Keeping in mind that the underlaying JSON files may get updated.

  const users = files
    .filter(filename => filename.includes('.json'))
    .map(filename => getUser(filename.replace('.json', '')));

  return users;
}
