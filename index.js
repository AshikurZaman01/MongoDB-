const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri =
    'mongodb+srv://mongo_practice:xdO6HO2fY7bG6bFk@cluster0.q0gttvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();

        const DB = client.db('Mongo_Practice');
        const userCollection = DB.collection('users');


        app.delete('/api/v1/users/:id', async (req, res) => {

            const userID = req.params.id;
            const query = { _id: new ObjectId(userID) };

            const result = await userCollection.deleteOne(query);
            res.send(result);
        })


        app.get('/api/v1/users', async (req, res) => {
            const user = await userCollection.find({}).toArray();
            res.send(user);
        })



        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        // Ensure to close the client when done
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello from MongoDB');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
