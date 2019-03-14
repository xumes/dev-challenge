import Koa from 'koa';

const start = Date.now();

import graphql from './src/graphql';

// Initialize app
const port = 5000;
const app = new Koa();

graphql.applyMiddleware({ app });

app.listen({ port }, () => {
  const end = Date.now();
  console.log(
    `Server ready at http://localhost:${port}${
        graphql.graphqlPath
    } | startup took ${end - start}ms`
  );
});
