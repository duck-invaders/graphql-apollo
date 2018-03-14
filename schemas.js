import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';
import Astronaute from './typedefs/astronaute';
import AstronauteInput from './typedefs/astronauteInput';
import Planet from './typedefs/planet';
import Grade from './typedefs/grade';

const RootQuery = `
  type RootQuery {
    astronaute(id: Int!): Astronaute,
    astronautes: [Astronaute]
    planet(id: Int!): Planet
  }
`;

const RootMutation = `
  type RootMutation {
    saveAstronaute(input: AstronauteInput!): Astronaute
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`;

export default makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, RootMutation, AstronauteInput, Astronaute, Planet, Grade],
    resolvers: resolvers,
});