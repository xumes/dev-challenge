import { getUser } from '../../helpers';
import users from './Query/users'

// todo: 5. it would be nicer to return a base62 value for the id field instead of a base16 uuid.
// ideally this would be implemented without changing the underlaying data, in a reusable way.
// Sending data to the client side should convert a base16 uuid to a base62 string, and inputting
// into the graphql api should convert a base62 string back to a base16 uuid

export default {
  employees: async (root, args, { ctx }, info) => {
    let employees = [];
    // root.employees will be an array of just user ids.
    console.log("root", root)
    if (root.employees) {
      // lets turn that into actual user data.
      employees = root.employees.map(id => getUser(id));
    }

    return employees;
  }
};
