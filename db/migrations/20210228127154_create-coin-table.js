exports.up = async function up(knex) {
    await knex.schema.createTable('wallet_ballances', table => {
      table
        .increments('id')
        .unsigned()
        .notNullable()
        .primary(['transactions_pkey']);
      table.string('name', 60).notNullable();
      table.string('price', 60).notNullable();
    });
  };
  
  exports.down = async function down(knex) {
    await knex.schema.dropTable('coins');
  };
  