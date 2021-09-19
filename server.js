const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'BrandonSanderson04!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found), should be last route
app.use((req, res) => {
    res.status(404).end();
});

// Creates PORT for localhost:3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
