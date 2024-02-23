// controllers
import { UsuarioController } from './controllers/usuarioController';

import { Router } from 'express'

import { autenticaoToken } from './middlewares/autenticacaoToken';

import multer from 'multer';
import { Detector } from './entities/detector.entities';
import { DetectorController } from './controllers/detectorController';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
const routes = Router();

routes.post("/login",  new UsuarioController().login);

// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);

routes.post("/imgUser", upload.single('imagem'),  new UsuarioController().imgUsuario)

routes.post("/listFrame", upload.array('imagem'), new DetectorController().createListDetector)

//a partir daqui tds as rotas so sao acessadas apenas com a token
routes.use(autenticaoToken)

export default routes;