const express = require('express');
const cors = require('cors');
const db = require('./db');
const assetRoutes = require('./routes/assets');
const authMiddleware = require('./middleware/auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets', authMiddleware, assetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
