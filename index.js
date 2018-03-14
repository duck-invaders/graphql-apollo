import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';

//const myGraphQLSchema = // ... define or import your schema here!
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
//app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.get('/', function (req, res) {
    res.send('Hello World!')
})


app.listen(PORT);