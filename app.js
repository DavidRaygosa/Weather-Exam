'use strict'

var express = require('express');
const cors = require('cors');
var path = require('path');

var app = express();

// Load Routes

var project_routes = require('./routes/routes');

// CORS

app.use((req, res, next) => // CORS Permite Respuesta Entre El Backend y El Frontend Evitando Errores
{
    res.header('Access-Control-Allow-Origin', '*'); // El * Tendria que cambiar por URL cuando sea un Servidor
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Route

//THIS LINE TO LOCAL
//app.use('/api',project_routes);


// THIS LINE TO SERVER

app.use('/', express.static('client', {redirect:false}));
app.use('/api',project_routes);
app.get('*', function(req,res,next)
{
	res.sendFile(path.resolve('client/index.html'));
});

// Export
module.exports = app;