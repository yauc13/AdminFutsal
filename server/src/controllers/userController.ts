import { Request, Response } from 'express';


import pool from '../database';

class UserController {

    public async login(req: Request, res: Response): Promise<any> {
        const { username } = req.params;
        const games = await pool.query('SELECT * FROM user WHERE username = ?', [username],function(err,result,fields){
            if(err) throw err;
            res.json(result[0])            
        });               
    }

    public async list(req: Request, res: Response): Promise<void> {        
        await pool.query('SELECT * FROM user',function(err,result,fields){
            if(err) throw err;
            res.json(result)
        });               
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM user WHERE idUser = ?', [id],function(err,result,fields){
            if(err) throw err ;
            res.json(result[0])            
        });               
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO user set ?', [req.body]);
        //console.log(req.body);
        res.json({ message: 'user Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;        
        await pool.query('UPDATE user set ? WHERE idUser = ?', [req.body, id]);
        res.json({ message: "The user was Updated "+id });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM user WHERE idUser = ?', [id]);
        res.json({ message: "The user was deleted: "+id });
    }
}

const userController = new UserController;
export default userController;