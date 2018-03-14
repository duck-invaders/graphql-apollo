import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';
import Astronaute from './typedefs/astronaute';
import Planet from './typedefs/planet';
import Grade from './typedefs/grade';

const RootQuery = `
  type RootQuery {
    astronaute(id: Int!): Astronaute,
    astronautes: [Astronaute]
    planet(id: Int!): Planet
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, Astronaute, Planet, Grade],
    resolvers: resolvers,
});