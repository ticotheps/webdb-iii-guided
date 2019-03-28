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
      },
    },
  },
};

// Day 4, Step 1: Add a 'migrations' object and a 'seeds' object to the export statement.
// Day 4, Step 2: Run 'npx knex migrate:make lambda_tables'
// Day 4, Step 3: Create multiple tables in one migration inside new migration file.
// Day 4, Step 4: Create a 'pool' object in the export statement of the 'knexfile.js' file.
// Day 4, Step 5: Run 'yarn add knex-cleaner --dev' to install this npm module.
// Day 4, Step 6: Create seed data using 'npx knex seed:make 000-cleanup' command in the terminal.
// Day 4, Step 7: Fill out 000-cleanup.js file and revise 001-roles.js file.
// Day 4, Step 8: Create MORE seed data for: 002-tracks, 003-cohorts, 004-students, 005-cohort_students using the 'npx knex seed:make ' command.
// Day 4, Step 9: Run 'npx knex migrate:latest'.
