
import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.middelwares();

        // Definir mis rutas
        this.routes();
    }

    middelwares() {

        // CORS
        this.app.use( cors() );
        
        // Lectura del body
        this.app.use( express.json() );
        
        // Carpeta publica
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en el puerto!! ' + this.port );
        } )
    }

}

export default Server;
