const express = require("express")
const app = express()
var hbs = require("express-handlebars");
const path = require("path");


app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

require('./server/database/database')();

app.set('view engine', 'hbs');
app.engine('hbs',hbs.engine({
    extname: 'hbs',
    defaultView : 'default',
    layoutsDir : path.join(__dirname,'views'),
    partialsDir : path.join(__dirname,'views/partials')
}))

app.use('/',require('./server/router/router'))

app.listen(3000,()=> console.log(`Server started on 3000 port`))