import videos from "../models/Video.js";


class VideoController{

    static listarVideos = (req,res) =>{
        videos.find((err,videos)=>{
            res.json(videos)
    })

  }

  static cadastrarVideo = (req,res)=>{
    let video = new videos(req.body);
    
    video.save((err)=>{
     if(err){
      res.status(500).send({message:`${err.message} Falha ao cadastrar no banco`})
     }else{
      res.status(201).send(video.toJSON())
     }
    }
  )}

  static atualizarVideo = (req,res) =>{
    const id = req.params.id

    videos.findByIdAndUpdate(id,{$set: req.body} , (err)=>{
      if (!err){
        res.status(200).send(`video from db modification sucess`)
      } else{
        res.status(500).send({message:`${err.message}, --ERRO modification database`})
      }
    } )
  }
  static listarPorId = (req,res)=>{
    const id  = req.params.id
    videos.findById(id, (err,videos)=>{
      if (err){
        res.status(400).send({message:`${err.message} ERRO - id not found in search `})
      } else{
        res.status(200).send(videos)
      }
    })
  }
  static deletarVideo = (req,res)=>{
    const id = req.params.id
    videos.findByIdAndDelete(id,(err,videos) =>{
      if(err){
        res.status(400).send({message:`${err.message} ERRO - id not found in search `})
      }else{
        res.status(200).send(videos)
      }
    })

  }
}

export default VideoController