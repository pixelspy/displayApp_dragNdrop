// CRUD Routes


module.exports = function(app, db) {
  app.post('/display', (req, res) => {
    console.log(req.body);
    res.send('hello');
  })
}
