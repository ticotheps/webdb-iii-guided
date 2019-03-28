// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db3',
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
};

// Day 4, Step 1: Add a 'migrations' object and a 'seeds' object to the export statement.
// Day 4, Step 2: Run 'npx knex migrate:make lambda_tables'
// Day 4, Step 3: Create multiple tables in one migration inside new migration file.
