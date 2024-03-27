import { Frame } from "../entities/frame.entities";
import { AppDataSource } from "../data-source";


const FrameRepository = AppDataSource.getRepository(Frame);




export {FrameRepository}