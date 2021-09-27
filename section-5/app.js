const express = require('express');
const appDebugger = require('debug')("app:startup");
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middlewares/logger');

const app = express();
const port = process.env.PORT || 3000;
appDebugger("this is from app debugger");

console.log(`NODE ENV: ${process.env.NODE_ENV}`);
console.log(`APP ENV: ${app.get('env')}`);

console.log(`APP CONFIG ENV: ${config.get('name')}`);
console.log(`MAIL SERVER: ${config.get('mail.server')}`);
if(app.get('env')=="development"){
    app.use(morgan('tiny'));
}
app.use(helmet());
app.use(logger);

app.use((req,res,next)=>{
    appDebugger('Authentication...');
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Hey It's working" });
});
app.get('/api/user/:user', (req, res) => {
    res.status(200).json({ "user": req.params.user });
});

app.listen(port, () => {
    console.log("Listening to the port 3000");
})
