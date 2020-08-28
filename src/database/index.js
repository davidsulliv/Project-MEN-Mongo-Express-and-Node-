const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://mongo:27017/noderest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = mongoose;