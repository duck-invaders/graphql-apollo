const up = function up(pg) {
    return pg.schema.createTable('astronaute', function (table) {
        table.increments();
        table.string('pseudo');
        table.string('photo');
        table.integer('grade_id');
        table.foreign('grade_id').references('grade.id');
        table.timestamps(true, true);
    });
};

const down = function down(pg) {
    return pg.schema.hasTable('astronaute').then(function (exists) {
        if (exists) {
            return pg.schema.table('astronaute', function (table) {
                table.dropForeign('grade_id');
            }).then(() => {
                return pg.schema.dropTable('astronaute');
            });
        }
    });
};

export default { up, down };