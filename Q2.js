const express = require('express');
const app = express();

let counter = 0;
const port = 4000;

// Middleware
app.use(express.json());

// Current counter value
app.get('/', (req, res) => {
    res.json({ counter }); 
});

app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
