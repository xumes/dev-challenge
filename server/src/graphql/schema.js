import { makeExecutableSchema } from "apollo-server-koa";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import schemaDirectives from "./schemaDirectives";

// Initialize ApolloServer
export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives
});
