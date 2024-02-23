import { Response, Request } from "express";

import fs from 'fs'
import path from "path";
import { Buffer } from "buffer";
import Frame from "../models/frame";
import Detector from "../models/detector";
import ListFrame from "../models/listFrame";

export class DetectorController {
    async createListDetector(req: Request, res: Response) {
        const { listFrame, listBoundingbox } = req.body

        let list: ListFrame
        let listObjectBoundingBox: Array<Detector> = []
        for (let i = 0; i <= listFrame.length-1; i++) {
            
            let nomeFrame = 'frame'+Date.now()
            // const img64 = listFrame[i].split(',')[1]
            // const imgbuffer = Buffer.from(img64, 'base64')
            // const pathImg = path.join(__dirname, `uploads/${nomeFrame}.png`)
            
            // fs.writeFile(pathImg, imgbuffer, { encoding: 'base64' }, (err) => {
            //     console.log(err)
            // })
            
            for(let j = 0; j <= listBoundingbox[i].length-1; j++) {
                // console.log('boundingBox individual')
                console.log(listBoundingbox[i][j].label)
                let boundingBox = Detector.create(
                    listBoundingbox[i][j].width,
                    listBoundingbox[i][j].height,
                    listBoundingbox[i][j].x,
                    listBoundingbox[i][j].y,
                    listBoundingbox[i][j].score,
                    listBoundingbox[i][j].label,
                    nomeFrame)
                
                listObjectBoundingBox.push(boundingBox)
                console.log(i, j)
            }
            
        }

        console.log(listObjectBoundingBox)
        

        return res.status(200).json('deu certo irmao vlw');
    }
}