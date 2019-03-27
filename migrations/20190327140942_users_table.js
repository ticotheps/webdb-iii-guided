// what new changes we need to make
exports.up = function(knex) {
  return knex.schema.createTable("users", function(tbl) {
    // primary key, called 'id' and make it auto-increment
    tbl.increments();

    tbl
      .string("name", 128) // this will translate to 'varchar' in SQLite3; 2nd argument is optional (size of string)
      .notNullable()
      .unique();

    // adding a foreign key
    tbl
      .integer("role_id") // the column name in this table (users)
      .unsigned()
      .references("id") // the primary key in the related (parent) table (roles)
      .inTable("roles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

// how to undo the changes made in the top function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};

// STEPS

// npx knex init => creates a migrations folder
// npx knex migrate:make users_table => creates a new table
// npx knex migrate:latest => runs the latest migration of the database
// npx knex migrate:rollback => undo last changes you made to the database
