/** @format */

const express = require('express'); // must use this which is called CommonJS syntax, unless using typescript or babel
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users')); //anything that goes to '/api/...' gets forwarded to './routes/...'
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
