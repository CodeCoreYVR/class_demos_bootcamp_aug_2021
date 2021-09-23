const knex = require("./client");
//require the file where we setup the connection

// knex.select('*').from('posts')
// knex.select('id', 'title').from('posts')

//Select where clause
// knex.select('*')
// .from('posts')
// .where('title', 'ilike', '%ee%')
// .limit(5)
// .offset(10)

// Similar to SQL queries like this:
// SELECT * FROM ...

//whereRaw
knex.select('*')
.from('posts')
.whereRaw(`"createdAt" > now() - interval '2 days'`)
//Only executes when .then method is called
.then(data => {
    console.log(data);
    knex.destroy(); //Only if the program must close
})

