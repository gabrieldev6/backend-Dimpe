import { ListFrame } from "../entities/listFrame.entities";
import { AppDataSource } from "../data-source";


const listFrameRepository = AppDataSource.getRepository(ListFrame);




export {listFrameRepository}