import  express  from 'express';
import VideoController from '../controller/videosController.js';



const router = express.Router();

router
   .get('/videos',VideoController.listarVideos)
   .post('/videos',VideoController.cadastrarVideo)
   .put('/videos/:id',VideoController.atualizarVideo)
   .get('/videos/:id',VideoController.listarPorId)
   .delete('/videos/:id',VideoController.deletarVideo)

export default router;