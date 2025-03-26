const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use("/assets",express.static( 'public'));

app.set('views', __dirname + '/views');
// Root route
app.get('/', (req, res) => {
 
    res.sendFile(__dirname+'/views' + '/index.html');
 
});
app.post('/', (req, res) => {
  res.send(req.body);
});

// API routes
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});
router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// Mount the router at /chotu
app.use('/chotu', router);
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// })
// Export the handler for Netlify Functions
module.exports.handler = serverless(app);