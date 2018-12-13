const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//const route = require('./routes/index');
const accountController = require('./routes/accountRoute');


//settings
app.set('views',path.join(__dirname,'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');



//middlewares
app.use(cors());
app.use(express.json());

//routes
//app.use(route);
app.use('/api',accountController);

//statics files 
app.use(express.static(path.join(__dirname,'dist')));

//start server
app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
})