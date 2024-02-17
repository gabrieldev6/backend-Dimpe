import { Usuario } from "../entities/usuario.entities";
import { AppDataSource } from "../data-source";


const usuarioRepository = AppDataSource.getRepository(Usuario);




export {usuarioRepository}