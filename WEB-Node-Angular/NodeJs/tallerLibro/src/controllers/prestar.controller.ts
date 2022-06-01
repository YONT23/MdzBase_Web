import { Prestar, PrestarI } from "../models/prestar";
import { Request, Response } from "express";
import { Usuario } from "../models/usuario";
import { Libro } from "../models/libro";


export class PrestarController {
    async getAllPrestar(req: Request, res: Response) {
        let prestar: PrestarI[] = await Prestar.findAll({
            attributes: ['UsuarioId','EjemplarId','fecha_dev','fecha_pres',]
        })
        res.status(200).json({prestar})
    }

    async createPrestar(req: Request, res: Response) {
        const {
            UsuarioId,
            EjemplarId,
            fecha_dev,
            fecha_pres,
        } = req.body

        try {
            let body: PrestarI = {
                UsuarioId,
                EjemplarId,
                fecha_dev,
                fecha_pres,
            }
            await Prestar.create({...body})
            res.status(200).json({msg: 'Prestar creado correctamente...!'})
        } catch (error) {
            
        }
    }   
}
 