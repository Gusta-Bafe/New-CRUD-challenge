import videos from "../models/Video.js";


class LivroController{

    static listarVideos = (req,res) =>{
        videos.find((err,videos)=>{
            res.json(videos)
    })

  }
}

export default LivroController