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
    if(err) {
      res.send('<h2>Error:</h2><pre>' + err + '</pre>');
      throw(err);
    } else {
      res.send('<h2>It worked!</h2><pre>' + m + '</pre>');
    }
  });
});

app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);

