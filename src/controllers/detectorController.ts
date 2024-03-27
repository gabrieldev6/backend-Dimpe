import { Response, Request } from "express";


import Detector from "../models/detector";
import { detectorRepository } from "../repositories/detectorRepositore";
import { listFrameRepository } from "../repositories/listFrameRepostore";
import { FrameRepository } from "../repositories/frameRepositore";

// import { usuarioRepository } from "../repositories/usuarioRepositore";

export class DetectorController {
  async createListFrame (req: Request, res: Response) {
    const {tempo} = req.body

    // console.log(tempo)
    
    let newListFrame = listFrameRepository.create({data: tempo, indice_lista: 1})
    await listFrameRepository.save(newListFrame)

    console.log(newListFrame)

    if(newListFrame) {
      
      return res.status(200).json({
        erro: false,
        mensagem: "referencia de lista criada com sucesso"
      })

    }

  }

  async createListBoudingBox(req: Request, res: Response) {

    const { list, dataNow } = req.body
    let newBoundingBox
    if (!list) {
      res.status(400).json({
        erro: true,
        mensagem: 'nao recebi nada'
      })
    }

    // console.log(dataNow)




    for (let i = 0; i < list.length; i++) {
      let boundingBox = Detector.create(
        list[i].width,
        list[i].height,
        list[i].x,
        list[i].y,
        list[i].score,
        list[i].label,
        dataNow)

      newBoundingBox = detectorRepository.create(boundingBox)
      await detectorRepository.save(newBoundingBox)


    }

    if (newBoundingBox) {

      return res.status(200).json({
        erro: false,
        mensagem: 'salvo com sucesso'
      })

    } else {

      return res.status(400).json({
        erro: true,
        mensagem: 'não foi possivel salvar os dados'
      })

    }
  }

  async createListDetector(req: Request, res: Response) {
    if (req.file) {
      // vai pegar a ultimo elemento da tabela
      const ultimoDaLista = await listFrameRepository.find({order: {
        id_list: "DESC"
      }})

      console.log("ultimo da lista: ")
      console.log(ultimoDaLista)
      let newFrame = FrameRepository.create({ nome: req.file.originalname, caminho: req.file.path, indice_lista: ultimoDaLista[0].id_list })
      await FrameRepository.save(newFrame)

      return res.status(200).json({
        erro: false,
        mensagem: 'recebido com sucesso'
      })


    }

    return res.status(400).json({
      erro: true,
      mensagem: "erro upload nao realizado"
    })
  }

  async readListFrame(req: Request, res: Response) {
    const { numberList } = req.body
    const listBoudingBox: Array<any> = []

    const listFrame = await listFrameRepository.findOne({ where: { id_list: numberList } })

    const frames = await FrameRepository.findBy({ indice_lista: listFrame?.id_list })

    for (let i = 0; i < frames.length; i++) {

      const boundingBox = await detectorRepository.findOne({ where: { frame: frames[i].nome } })

      listBoudingBox.push(boundingBox)
    }
    // console.log(listFrame)
    // console.log(frames)
    // console.log(listBoudingBox)


    res.status(200).json({
      erro: false,
      listFrame: listFrame,
      frames: frames,
      listBoundingBox: listBoudingBox
    })
  }


}