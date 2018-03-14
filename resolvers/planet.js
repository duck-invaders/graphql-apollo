import pg from './../pg';
import Planet from '../typedefs/planet';

const resolvers = {
    RootQuery: {
        async planet(obj, args, context, info) {
            return (await pg
                .select()
                .table('planet')
                .where('id', args.id)
                .limit(1)).pop();
        },
    },
    Planet: {
        async astronautes(planet) {
            return (await pg
                .select()
                .table('astronaute')
                .innerJoin('planet-astronaute', 'planet-astronaute.astronaute_id', '=', 'astronaute.id')
                .where('planet-astronaute.planet_id', planet.id)
            );
        }
    },
};

export default resolvers;
