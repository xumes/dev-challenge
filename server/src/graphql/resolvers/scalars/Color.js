import { SyntaxError } from 'apollo-server-koa';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import Color from 'color';

export default new GraphQLScalarType({
  name: 'Color',
  description: 'A Color.',
  serialize(value) {
    return new Color(value).rgb().string();
  },
  parseValue(value) {
    return new Color(value).rgb().string();
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.STRING:
        return new Color(ast.value).rgb().string();
      case Kind.ENUM:
      case Kind.BOOLEAN:
      case Kind.INT:
      case Kind.FLOAT:
      default:
        throw new SyntaxError(`${ast.kind} invalid for Color`);
    }
  }
});
