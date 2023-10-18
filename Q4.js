
const express = require('express');
const app = express();

const port = 3010;


// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: "I am homepage" }); 
});

app.get('/random', (req, res) => {
    const randomDecimal = Math.floor(Math.random()*10);
    res.json({ random: randomDecimal });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
