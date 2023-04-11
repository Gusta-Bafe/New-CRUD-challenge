import creator from "../models/Creator.js";


class creatorController{

    static listarCreator = (req,res) =>{
        creator.find((err,creator)=>{
            res.json(creator)
    })

  }

  static cadastrarCreator = (req, res) => {
    let newCreator = new creator(req.body);
  
    newCreator.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} Falha ao cadastrar no banco` });
      } else {
        res.status(201).send(newCreator.toJSON());
      }
    });
  };
  
  

  static atualizarCreator = (req,res) =>{
    const id = req.params.id

    creator.findByIdAndUpdate(id,{$set: req.body} , (err)=>{
      if (!err){
        res.status(200).send(`creator from db modification sucess`)
      } else{
        res.status(500).send({message:`${err.message}, --ERRO modification database`})
      }
    } )
  }
  static listarPorId = (req,res)=>{
    const id  = req.params.id
    creator.findById(id, (err,creators)=>{
      if (err){
        res.status(400).send({message:`${err.message} ERRO - id not found in search `})
      } else{
        res.status(200).send(creators)
      }
    })
  }
  static deletarCreator = (req,res)=>{
    const id = req.params.id
    creator.findByIdAndDelete(id,(err,creators) =>{
      if(err){
        res.status(400).send({message:`${err.message} ERRO - id not found in search `})
      }else{
        res.status(200).send(creators)
      }
    })

  }
}

export default creatorController