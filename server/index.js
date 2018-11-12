const express = require('express');
const app = express();
const hbs = require('express-hbs');
// var compression = require('compression')

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
  }));

hbs.registerHelper('imgBase64', function(dict, key) {
    // var attrs = [];
    // for(var prop in options.hash) {
    //   attrs.push(prop + '="' + options.hash[prop] + '"');
    // }
    // return new hbs.SafeString(
    //   "<a " + attrs.join(" ") + ">" + text + "</a>"
    // );
    var ext = key.substr(key.lastIndexOf('.') + 1).toLowerCase();
    return "data:image/"+ext.toLowerCase()+";base64,"+dict[key];
    
  });
  
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const routes = require('./routes');

// app.use(compression());
app.use(express.static('public'));

app.get('/favicon.ico', (req, res, next) =>{
    return res.sendStatus(204);
});

app.use('/', routes());

app.listen(3000);

module.export = app;