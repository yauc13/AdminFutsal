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
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const user = yield database_1.default.query('SELECT * FROM user WHERE username = ?', [body.username], function (err, result, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }
                if (result.length == 0) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'usuario no encontrado'
                        }
                    });
                }
                else {
                    if (result.length > 0) {
                        if (result[0].password == body.password) {
                            return res.status(200).json({
                                ok: true,
                                user: result[0],
                                token: '12345'
                            });
                        }
                        else {
                            return res.status(400).json({
                                ok: false,
                                err: {
                                    message: 'error contraseña'
                                }
                            });
                        }
                    }
                    else {
                        return res.status(400).json({
                            ok: false,
                            err: {
                                message: 'usuario no encontrado'
                            }
                        });
                    }
                }
            });
        });
    }
}
const loginController = new LoginController;
exports.default = loginController;
