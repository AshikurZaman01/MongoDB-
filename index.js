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

        app.get('/users', async (req, res) => {
            const user = await userCollection.find({}).toArray();
            res.send(user);
        })


        app.post('/users', async (req, res) => {

            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);

        })

        app.delete('/users/:id', async (req, res) => {

            const id = req.params.id;
            const query = {
                _id: new ObjectId(id)
            }

            const user = await userCollection.deleteOne(query);
            console.log(user);
            res.send(user);

        })

        app.get('/users/:id', async (req, res) => {

            const id = req.body.id;
            const query = { id: id };
            const user = await userCollection.findOne(query);
            console.log(user);
            res.send(user);

        })

        app.put('/users/:id', async (req, res) => {

            const id = req.params.id;
            const data = req.body;
            const query = { _id: new ObjectId(id) }
            const options = { upsert: true }

            const updatedData = {
                $set: {
                    name: data.name,
                    email: data.email,
                    like: data.like,
                    dislike: data.dislike
                }
            }

            const result = await userCollection.updateOne(query, updatedData, options);
            console.log('updated', result);

            res.send(result);
        })


        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        // Ensure to close the client when done
        // await client.close();
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
