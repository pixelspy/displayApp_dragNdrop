const displayRoutes = require('./display_routes');

module.exports = function(app, db){
  displayRoutes(app,db);
}
