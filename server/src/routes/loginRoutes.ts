import express, { Router } from 'express';

import loginController from '../controllers/loginController';

class LoginRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        
        this.router.post('/', loginController.login);
        
    }

}

export default new LoginRoutes().router;