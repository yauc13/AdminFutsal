import indexRoutes from './indexRoutes';
import gamesRoutes from './gamesRoutes';
import championshipRoutes from './championshipRoutes';
import userRoutes from './userRoutes';
import loginRoutes from './loginRoutes';
const express = require('express');

const app = express();
//todas la rutas definidas
app.use('/', indexRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/championship',championshipRoutes);



module.exports = app;