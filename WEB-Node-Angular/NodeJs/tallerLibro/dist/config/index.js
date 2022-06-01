"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
//import morgan from 'morgan'
//import { Routes } from '../routes/index';
//var cors = require('cors')
class App {
    //public routerPriv: Routes = new Routes();
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
    settings() {
        this.app.set('port', this.port || 3000);
    }
    middlewares() {
        //this.app.use(morgan('dev'))
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //this.app.use(cors())
    }
    routes() {
        //this.routerPriv.usuarioRoutes.Routes(this.app)
        //this.routerPriv.libroRoutes.Routes(this.app)
        //this.routerPriv.ejemplarRoutes.Routes(this.app)
        //this.routerPriv.prestarRoutes.Routes(this.app)
    }
}
exports.App = App;
