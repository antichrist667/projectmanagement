require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/config/dbconfig'); 
const projectRoutes = require('./routes');

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api', projectRoutes);

const PORT = process.env.PROJECT_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
