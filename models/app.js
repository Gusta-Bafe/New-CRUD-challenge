import  express  from 'express';
import db from "../src/config/dbconect.js"
import routes from '../routes/main.js';


db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open",()=>{
    console.log('A conexão com o banco foi feita com sucesso')
})
const app = express();


routes(app);



export default app
