const express = require('express');
const serverless = require('serverless-http');
const path=require("path")
const app = express();
const router = express.Router();
const fs = require('fs');
// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public'));
const viewsPath = path.join(__dirname, 'views');
console.log('Views directory:', viewsPath);
if (!fs.existsSync(viewsPath)) {
  console.error('Views directory not found:', viewsPath);
}
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// Sample API routes
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});
router.post('/echo', (req, res) => {
    res.json({ received: req.body });
});
app.get('/', (req, res) => {
   
    res.render('index');
})
app.post('/', (req, res) => {
    res.send(req.body);
})

// Mount the router at /api to match the public-facing path
app.use('/chotu', router);

// Export the handler for Netlify Functions
module.exports.handler = serverless(app);


