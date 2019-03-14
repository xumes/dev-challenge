import { ApolloServer } from 'apollo-server-koa';

import schema from './schema';

export default new ApolloServer({
  schema,
  context: async ({ ctx }) => {
    return {
      ctx
    };
  }
});
