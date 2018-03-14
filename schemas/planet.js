const up = function up(pg) {
    return pg.schema.createTable('planet', function (table) {
        table.increments();
        table.string('name');
        table.string('logo');
        table.timestamps(true, true);
    });
};

const down = function down(pg) {
    return pg.schema.dropTableIfExists('planet');
};

export default { up, down };