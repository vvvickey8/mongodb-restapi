var express = require('express')
  , bodyParser = require('body-parser')
  , path = require('path')
  , app = express();



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
//  Connect all our routes to our application
app.use(require('./routes'))

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})

module.exports = app;