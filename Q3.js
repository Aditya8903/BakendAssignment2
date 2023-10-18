const express = require('express');
const app = express();

let counter = 0;
const port = 3030;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: "I am homepage" }); 
});

app.get('/about', (req, res) => {
    counter++;
    res.json({ msg: "I am about page" });
});

app.get('/contact', (req, res) => {
    counter--;
    res.json({ email: "support@pwskills.com" }); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
