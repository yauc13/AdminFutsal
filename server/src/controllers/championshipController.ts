import { Request, Response } from 'express';


import pool from '../database';

class ChampionshipController {

    public async list(req: Request, res: Response): Promise<void> {        
        await pool.query('SELECT * FROM championship',function(err,result,fields){
            if(err) throw err;
            res.json(result)
        });               
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Championship WHERE idChampionship = ?', [id],function(err,result,fields){
            if(err) throw err ;
            res.json(result[0])            
        });               
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Championship set ?', [req.body]);
        //console.log(req.body);
        res.json({ message: 'Championship Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;        
        await pool.query('UPDATE Championship set ? WHERE idChampionship = ?', [req.body, id]);
        res.json({ message: "The Championship was Updated "+id });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Championship WHERE idChampionship = ?', [id]);
        res.json({ message: "The Championship was deleted: "+id });
    }
}

const championshipController = new ChampionshipController;
export default championshipController;