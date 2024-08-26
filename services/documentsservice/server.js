require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/config/dbconfig'); 
const documentRoutes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api', documentRoutes);

const PORT = process.env.DOCUMENT_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
