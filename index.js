const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const USERS = [
    { id: 1, name: 'John Doe', email: 'john@example.com', like: 15, dislike: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', like: 20, dislike: 3 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', like: 10, dislike: 8 },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', like: 25, dislike: 2 },
    { id: 5, name: 'Mike Brown', email: 'mike@example.com', like: 8, dislike: 12 },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', like: 30, dislike: 1 },
    { id: 7, name: 'David Miller', email: 'david@example.com', like: 12, dislike: 7 },
    { id: 8, name: 'Sarah Wilson', email: 'sarah@example.com', like: 18, dislike: 4 },
    { id: 9, name: 'Sarah Thomas', email: 'SarahThomas@example.com', like: 22, dislike: 6 },
];

app.get('/', (req, res) => {
    res.send('User Server is Running');
})









app.listen(port, () => {
    console.log(`User Server is running at http://localhost:${port}`);
})


