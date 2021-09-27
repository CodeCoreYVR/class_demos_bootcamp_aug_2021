const express = require('express');
const knex = require('../db/client');
// we are only using the route functionality from express
// so we don't need to create the initial of express
// but the initial of express.Router
const router = express.Router();

router.get("/", (req, res) => {
    knex.select('*')
        .from('posts')
        .orderBy('createdAt', 'desc')
        .then(data => {
            console.log(data);
            res.render("posts/index", { list: data });
        })
    //because it's an asynchronous function so we need to render inside then function
});

// get to the new page to create a post(blog)
// always put get /new above get /:id
router.get('/new', (req, res) => {
    res.render("posts/new");
})

router.post("/", (req, res) => {
    // all the data from the form, gonna be stored inside the request.body
    // it has to be a post request
    knex("posts")
        .insert({
            title: req.body.title,
            content: req.body.content,
            imageUrl: req.body.imageUrl
        })
        .returning('*') // ask knex to return the record we just added
        .then(data => {
            res.redirect(`/posts/${data[0].id}`)
            // /posts/3
        })

})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    knex("posts")
        .where("id", id)
        .first()
        .then(data => {
            res.render("posts/show", { post: data });
        })

})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    knex("posts").where("id", id)
        .del()
        .then(() => {
            res.redirect("/posts");
        })
})

// route to get to the edit page
// also get that specific record and pass it to the edit page
router.get('/:id/edit', (req, res) => {
    knex("posts")
        .where("id", req.params.id)
        .then(data => {
            res.render("posts/edit", { post: data[0] });
        })
})

router.patch('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    knex("posts")
        .where("id", req.params.id)
        .update(
            {
                title: req.body.title,
                content: req.body.content,
                imageUrl: req.body.imageUrl
            }
        ).then(() => {
            res.redirect(`/posts/${req.params.id}`)
        })
})

// export this router in the end so we can use the routes inside index.js
module.exports = router;