import app from './models/app.js'


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`)
})
