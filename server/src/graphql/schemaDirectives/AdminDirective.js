import { SchemaDirectiveVisitor, AuthenticationError } from 'apollo-server-koa';
import { defaultFieldResolver } from 'graphql';

/**
 * The AdminDirective placed on query fields and indicates that this
 * query can only run by an Admin (Super User) level user.
 */
export default class AdminDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(root, args, ctx, info) {
      if (!ctx.isAdmin) {
        throw new AuthenticationError();
      }

      return resolve.call(this, root, args, ctx, info);
    };
  }
}
