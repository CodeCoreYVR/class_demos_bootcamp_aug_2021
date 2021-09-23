const knex = require("./client");    

//To update record 100 with a new title 
//(hint: make sure that the record id exists before trying to update it)

// const query1=knex('posts')
// .where('id',100)
// .update({
//     title: 'So many views',
// });


//To update all records with an id less than or equal to 100
//to have the same title "sparkled"
const query1= knex('posts')
        .where("id", "<=", "100")
        .update({
            title:'sparkled'
        })


console.log(query1.toString());

query1.then((data=>{
    console.log(data);
    knex.destroy();
}))