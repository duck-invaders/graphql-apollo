import pg from './../pg';
import Astronaute from '../typedefs/astronaute';

const resolvers = {
    RootQuery: {
        async astronautes() {
            return await pg.select().table('astronaute');
        },
        async astronaute(obj, args, context, info) {
            return (await pg
                .select()
                .table('astronaute')
                .where('id', args.id)
                .limit(1)).pop();
        },
    },
    Astronaute: {
        async grade(astronaute) {
            return (await pg
                .select()
                .table('grade')
                .where('id', astronaute.grade_id)
                .limit(1)).pop();
        },
        async planet(astronaute) {
            return (
                await pg
                    .select()
                    .table('planet')
                    .innerJoin('planet-astronaute', 'planet-astronaute.planet_id', '=', 'planet.id')
                    .where('planet-astronaute.astronaute_id', astronaute.id)
                    .limit(1)).pop();
        }
    },
};

export default resolvers;
