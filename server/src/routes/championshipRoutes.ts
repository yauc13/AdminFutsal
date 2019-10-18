import express, { Router } from 'express';

import championshipController from '../controllers/championshipController';

class ChampionshipRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', championshipController.list);
        this.router.get('/:id', championshipController.getOne);
        this.router.post('/', championshipController.create);
        this.router.put('/:id', championshipController.update);
        this.router.delete('/:id', championshipController.delete);
    }

}

export default new ChampionshipRoutes().router;

