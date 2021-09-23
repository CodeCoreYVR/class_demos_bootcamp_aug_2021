// Update with your config settings.

//This file is generated with knex init
//knex init is only possible because we did:
//npm i knex pg
//and npm i -g knex pg

module.exports = {
  //We're not using production or staging environments for now
  //so we get rid of that default code

  development: {
    //we will be using pg as the driver instead of sqlite3
    client: 'pg',
    //We will not connect via a file, instead we will connect
    //via the database
    connection: {
      database: 'knex_db' //'name_of_database' that we created with createdb --echo 'name_of_database'

      //If you are a Linux user, you need to add a username and pw to the configuration:
      // username: "user",
      // password: "supersecret"

      /*In order to set the password you'll have to enter PostgreSQL
      visa terminal using the psql command and the run the /password command
      This will promt you to enter a new password
      */
    },
    //We create a migrations object which contains configs related
    //to migrations
    //We define the name of the table which stores all the data
    //related to running migrations
    //We define the directory that contains our migration files
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }
  }
};
