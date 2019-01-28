const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts 

router.get('/', async (req,res) => {
    const posts = await loadPostsCollection();

    res.send(await posts.find({}).toArray());
});


// Add Posts



// Delete Posts

router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

// Load Collection
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ( 'mongodb://admin:2468946Jj@ds111025.mlab.com:11025/portfolio_2', {
        useNewUrlParser: true
    });
    return client.db('portfolio_2').collection('posts');
}

module.exports = router;