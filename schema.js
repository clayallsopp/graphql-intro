import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/lib/type';

let count = 0;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  })
});

export default schema;