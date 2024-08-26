// server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/config/dbconfig'); 
const suggestionRoutes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api', suggestionRoutes);

const PORT = process.env.SUGGESTION_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
