import { getUser } from '../../../helpers';

export default async function user(root, { id }, { ctx }, info) {
  return getUser(id);
}
