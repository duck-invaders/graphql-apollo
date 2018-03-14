const up = function up(pg) {
    return pg.schema.createTable('planet-astronaute', function (table) {
        table.increments();
        table.integer('planet_id');
        table.integer('astronaute_id');
        table.foreign('planet_id').references('planet.id');
        table.foreign('astronaute_id').references('astronaute.id');
        table.timestamps(true, true);
    });
};

const down = function down(pg) {
    return pg.schema.hasTable('planet-astronaute').then(function (exists) {
        if (exists) {
            return pg.schema.table('planet-astronaute', function (table) {
                table.dropForeign('planet_id');
                table.dropForeign('astronaute_id');
            }).then(() => {
                return pg.schema.dropTable('planet-astronaute');
            });
        }
    });
};

export default { up, down };