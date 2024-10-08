require('dotenv').config();

const express = require('express');
const app = express();

const logger = require('./middleware/logger');

const cors = require('cors');

app.use(cors());
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/contact', require('./middleware/routes/api/contact'));
app.use('/api/chat', require('./middleware/routes/api/chat'));

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));