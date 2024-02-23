import { Detector } from "../entities/detector.entities";
import { AppDataSource } from "../data-source";


const detectorRepository = AppDataSource.getRepository(Detector);




export {detectorRepository}