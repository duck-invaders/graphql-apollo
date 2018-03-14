import Knex from 'knex';

const config = {
    host: 'pg',
    user: 'pg',
    password: 'pg',
    database: 'graphql'
};

const pg = Knex({
    client: 'pg',
    connection: config
});

export default pg;