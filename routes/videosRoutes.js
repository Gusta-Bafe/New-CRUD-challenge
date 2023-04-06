import  express  from 'express';
import VideoController from '../controller/videosController.js';



const router = express.Router();

router
   .get('/all',VideoController.listarVideos)

export default router;