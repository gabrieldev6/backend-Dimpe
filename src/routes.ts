// controllers
import { UsuarioController } from './controllers/usuarioController';

import { Router } from 'express'

import { autenticaoToken } from './middlewares/autenticacaoToken';

import uploadImage from './middlewares/uploadImage';
import { DetectorController } from './controllers/detectorController';
import uploadFrame from './middlewares/uploadFrame';


const routes = Router();


routes.post("/login",  new UsuarioController().login);

// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);

routes.post("/imgUser", uploadImage.single('image'), (req, res) => new UsuarioController().imgUsuario(req, res))
routes.post("/listFrame", (req, res)=> new DetectorController().createListFrame(req, res))
routes.post("/listBoundingBox", (req, res) => new DetectorController().createListBoudingBox(req, res))
routes.post("/frame", uploadFrame.single('image'), (req, res) =>  new DetectorController().createListDetector(req, res))

routes.get('/getFrame/:id', (req, res) => new DetectorController().readListFrame(req, res))
routes.get('/getListsframes', (req, res) => new DetectorController().readList(req, res))

//a partir daqui tds as rotas so sao acessadas apenas com a token
// routes.use(autenticaoToken)

export default routes;