import  express  from 'express';
import bodyParser from 'body-parser';
import db from "../src/config/dbconect.js"
import videos from './Video.js';
import routes from '../routes/main.js';


db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open",()=>{
    console.log('A conexão com o banco foi feita com sucesso')
})
const app = express();


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


routes(app);


app.get('/all',(req,res)=>{
    videos.find((err, videos)=>{
        res.status(200).json(videos)
    })
})



app.get('/video/:id',(req,res)=>{
    console.log(req.params.id)
    let Videos = videos[req.params.id]
    if (Videos){
        res.json(Videos)
    }
    else{
        res.send('Video não encontrado!')
    }
})


app.post('/new',bodyParser.json(),(req,res)=>{
      let id = adicionarID();
      let title = req.body.title;
      videos.push({id,title})
      
      if(!title){
      res.send('O título do video é obrigatorio')
      }
      else{
        res.json(`Video adicionado com sucesso iD: ${id}  Titulo: ${title}`)
      }
      console.log(videos)
})


app.put('/modificar/:id',(req,res) => {
    let index = buscaID(req.params.id);
    videos[index].title = req.body.title;

    res.json(videos);
    console.log(videos)
    

})


app.delete('/delete/:id',(req,res)=>{
     let idParaExcluir = Number(req.params.id);
     videos = videos.filter(videos => videos.id !== idParaExcluir)
    
    
     console.log(videos)
     res.send(`Livro:${idParaExcluir} foi deletado com sucesso`)

})

function adicionarID(){
    var addID = videos.length;
    addID++
    return addID;
}

function buscaID(id){
    return (videos.findIndex(video => video.id == id))
}


export default app
