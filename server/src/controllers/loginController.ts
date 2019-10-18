import { Request, Response } from 'express';


import pool from '../database';

class LoginController {

public async login(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const user = await pool.query('SELECT * FROM user WHERE username = ?', [body.username],function(err,result,fields){
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if( result.length ==0 ){
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'usuario no encontrado'
                }
            });
        }else{

        if( result.length >0 ){
            if(result[0].password==body.password){
                return res.status(200).json({
                    ok: true,
                    user: result[0],
                    token: '12345'
                });
        }else{
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'error contraseña'
                }
            });
        }
        }else{
            return res.status(400).json({
                ok:false,
                err:{
                    message: 'usuario no encontrado'
                }
            })
        }
    }
       


                    
    });               
}
}
const loginController = new LoginController;
export default loginController;