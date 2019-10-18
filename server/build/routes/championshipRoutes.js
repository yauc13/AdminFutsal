"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const championshipController_1 = __importDefault(require("../controllers/championshipController"));
class ChampionshipRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', championshipController_1.default.list);
        this.router.get('/:id', championshipController_1.default.getOne);
        this.router.post('/', championshipController_1.default.create);
        this.router.put('/:id', championshipController_1.default.update);
        this.router.delete('/:id', championshipController_1.default.delete);
    }
}
exports.default = new ChampionshipRoutes().router;
