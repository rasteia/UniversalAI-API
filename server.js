const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configure middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure API routes
const apiRouter = require('./app/api/routes');
app.use('/api', apiRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
