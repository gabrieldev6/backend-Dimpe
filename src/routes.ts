// controllers
import { UsuarioController } from './controllers/usuario';

import { Router } from 'express'

import { autenticaoToken } from './middlewares/autenticacaoToken';

import multer from 'multer';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
const routes = Router();

routes.post("/login",  new UsuarioController().login);

// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);

routes.post("/imgUser", upload.single('imagem'),  new UsuarioController().imgUsuario)

//a partir daqui tds as rotas so sao acessadas apenas com a token
routes.use(autenticaoToken)

export default routes;