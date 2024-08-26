require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/config/dbconfig'); 
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: 'https://frontend-zondeli7dq-uc.a.run.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
