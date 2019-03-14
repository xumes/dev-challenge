import { gql } from 'apollo-server-koa';
import fs from 'fs';
import glob from 'glob';

// Load all the .graphql files.

export default glob.sync('**/*.graphql').map(fileName => {
  const file = fs.readFileSync(fileName, 'utf8');
  try {
    return gql(file);
  } catch (err) {
    console.error(err);
    throw new Error(`Problem loading ${fileName}`);
  }
});
