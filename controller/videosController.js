import videos from "../models/Video.js";


class VideoController{

    static listarVideos = (req,res) =>{
        videos.find((err,videos)=>{
            res.json(videos)
    })

  }
}

export default VideoController