const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/finances';
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected', () => {
  console.log('connected to mongodb server');
})
db.on('disconnected', () => {
  console.log('mongodb disconnected');
})

module.exports = db;



