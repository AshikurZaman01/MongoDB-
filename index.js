const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const USERS = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com' },
    { id: 5, name: 'Mike Brown', email: 'mike@example.com' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com' },
    { id: 7, name: 'David Miller', email: 'david@example.com' },
    { id: 8, name: 'Sarah Wilson', email: 'sarah@example.com' },
]

app.get('/', (req, res) => {
    res.send('User Server is Running');
})


app.get('/users/:name', (req, res) => {

    const name = req.params.name;
    const user = USERS.find((user) => user.name.toLowerCase() === name.toLowerCase());

    if (!user) {
        return res.send('User Not Found');
    }
    res.send(user);
})

app.get('/users/:id', (req, res) => {

    const userId = req.params.id;
    const user = USERS.find((user) => user.id === parseInt(userId));

    if (!user) {
        return res.send('User Not Found');
    }
    res.send(user);
})

app.get("/users", (req, res) => {
    res.send(USERS);
})

app.listen(port, () => {
    console.log(`User Server is running at http://localhost:${port}`);
})


