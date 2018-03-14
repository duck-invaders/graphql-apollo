const up = function up(pg) {
    return pg.schema.createTable('grade', function (table) {
        table.increments();
        table.string('name');
        table.timestamps(true, true);
    });
};

const down = function down(pg) {
    return pg.schema.dropTableIfExists('grade');
};

export default { up, down };