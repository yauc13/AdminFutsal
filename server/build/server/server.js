"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("../routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("../routes/gamesRoutes"));
const championshipRoutes_1 = __importDefault(require("../routes/championshipRoutes"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
class Server2 {
    constructor(port) {
        this.app = express_1.default();
        this.port = port;
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
        this.app.use('/api/championship', championshipRoutes_1.default);
    }
    static init(port) {
        return new Server(port);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('---Server Inicialized on port', this.port);
        });
    }
}
exports.Server2 = Server2;
