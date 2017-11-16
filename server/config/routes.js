const users = require('./../controllers/users');
const bikes = require('./../controllers/bikes');

module.exports = (app)=>{
  // routes for users
  app.post('/users/create', users.create);
  app.post('/users/auth', users.auth)
  // routes for bikes
}
