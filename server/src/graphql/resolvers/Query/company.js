import { getCompany } from '../../../helpers';

export default async function company(root, { id }, { ctx }, info) {
  return getCompany(id);
}
