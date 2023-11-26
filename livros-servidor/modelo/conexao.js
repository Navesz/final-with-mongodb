const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Substitua 'url_do_mongodb' pela sua URL de conexão ao MongoDB
mongoose.connect('mongodb://localhost:27017', options);

module.exports = mongoose;
