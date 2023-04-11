import  express  from 'express';
import videos from  './videosRoutes.js';
import creator from './creatorsRoutes.js';





const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({title:"Curso de node"})
    })

    app.use(
        express.json(),
        videos,
        creator
    )
}
export default routes;