import { getUser } from '../../helpers';

// todo: 5. it would be nicer to return a base62 value for the id instead of a base16 uuid to the client side (to save room).
//  any easy way to implement this in graphql without changing the underlaying data?

export default {
  friends: async (root, args, { ctx }, info) => {
    let friends = [];
    // root.friends will be an array of just user ids.

    if (root.friends) {
      // lets turn that into actual user data.
      friends = root.friends.map(id => getUser(id));
    }

    return friends;
  }
};
