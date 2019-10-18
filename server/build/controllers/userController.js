"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.params;
            const games = yield database_1.default.query('SELECT * FROM user WHERE username = ?', [username], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM user', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM user WHERE idUser = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO user set ?', [req.body]);
            //console.log(req.body);
            res.json({ message: 'user Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE user set ? WHERE idUser = ?', [req.body, id]);
            res.json({ message: "The user was Updated " + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM user WHERE idUser = ?', [id]);
            res.json({ message: "The user was deleted: " + id });
        });
    }
}
const userController = new UserController;
exports.default = userController;
