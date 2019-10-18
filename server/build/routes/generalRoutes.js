"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexRoutes_1 = __importDefault(require("./indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./gamesRoutes"));
const championshipRoutes_1 = __importDefault(require("./championshipRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const loginRoutes_1 = __importDefault(require("./loginRoutes"));
const express = require('express');
const app = express();
//todas la rutas definidas
app.use('/', indexRoutes_1.default);
app.use('/api/games', gamesRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
app.use('/api/login', loginRoutes_1.default);
app.use('/api/championship', championshipRoutes_1.default);
module.exports = app;
