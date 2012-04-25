var express = require('express'),
    app     = module.exports = express.createServer(),
    port    = process.env.PORT || 3000,
    mime    = require('mime-magic'),
    util    = require('util');

// Configuration
app.configure(function () {
  app.set('port', port);
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.get('/', function(req, res) {
  mime.fileWrapper('./package.json', function(err, m) {
    util.debug(err);
    util.debug(m);
  });
  res.send('Done, check logs.');
});

app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);

