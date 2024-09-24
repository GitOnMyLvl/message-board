const express = require('express');
const app = express();
const path = require('path');
const indexRoutes = require('./routes/indexRoutes');
const newRoutes = require('./routes/newRoutes')
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRoutes);
//app.get('/new', newRoutes);

app.listen(port, () => {
  console.log(`Server running on Port: ${port}`)
})