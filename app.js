const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Middleware to parse JSON
app.use(express.json());

// Sample API routes
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// Mount the router at /api to match the public-facing path
app.use('/chotu', router);

// Export the handler for Netlify Functions
module.exports.handler = serverless(app);


