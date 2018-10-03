// CRUD Routes


module.exports = function(app, db) {
  app.post('/display', (req, res) => {
    const note = { text: req.body.body, title:req.body.title };
    db.collection('display').insert(display, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occured'});
      } else {
        res.send(result.ops[0])
      }
    });
  });
};
