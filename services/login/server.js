require('dotenv').config();
const express = require('express');
const dbConnect = require('./db/config/dbconfig'); 
const routes = require('./routes');

const app = express();


app.use(express.json());


app.use('/api', routes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
