import { setUser } from '../../../helpers';

export default async function User(root, { user }, { ctx }, info) {
  // todo: 1 this throws a bad error if that user ID doesn't exist. how can we make this a big more user friendly.

  // todo: 2 why is this making existing user data blank? Need to fix this so that the data is updated rather than over-written.

  await setUser(user);

  return true;
}
