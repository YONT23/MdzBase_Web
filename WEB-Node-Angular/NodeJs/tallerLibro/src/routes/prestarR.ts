import { PrestarController } from "../controllers/prestar.controller";
import { Application } from "express";



export class PrestarRoutes {
    public prestarController: PrestarController = new PrestarController()
    

    public Routes(app: Application) {
        app.route('/prestar').get(this.prestarController.getAllPrestar),
        app.route('/createPrestar').post(this.prestarController.createPrestar)
    }
}