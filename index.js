import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';
import schema from './schemas';

const PORT = 3000;

const app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    tracing: true,
    cacheControl: true
}));


const engine = new ApolloEngine({
    apiKey: 'service:CaptainJojo-9556:zYx_pkxqMfES2wOKFuZ5mA'
});

engine.listen({
    port: PORT,
    expressApp: app,
});

