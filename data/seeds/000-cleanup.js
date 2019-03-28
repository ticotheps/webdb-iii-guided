const cleaner = require('knex-cleaner');
  // will prevent foreign key errors
  // when trying to truncate the tables that have
  // foreign keys pointing to them
exports.seed = function(knex) {
  return cleaner.clean(knex);
  // after this command, all tables are empty
  // and all primary keys are reset
};

// WHAT DOES 'knex-cleaner' DO?
// It handles all of the complexities when we move to posgreSQL
// which will produce errors because we have foreign keys pointing
// to the table we're trying to manipulate

// '.truncate()' is a quick way to empty out a table, clean it up, and then reset the primary keys

