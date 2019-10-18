import express, { Application } from 'express';


import indexRoutes from '../routes/indexRoutes';
import gamesRoutes from '../routes/gamesRoutes';
import championshipRoutes from '../routes/championshipRoutes';
import userRoutes from '../routes/userRoutes';

export  class Server2 {

    public app: Application;
    public port: number;
    
    constructor(port : number) {
        this.app = express();
        this.port = port;
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/user', userRoutes);
        this.app.use('/api/championship',championshipRoutes);
    }

    static init (port: number){
        return new Server(port);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('---Server Inicialized on port', this.port);
        });
    }

}