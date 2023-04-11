import  express  from 'express';
import creatorController from '../controller/creatorController.js';



const router = express.Router();

router
   .get('/creator',creatorController.listarCreator)
   .post('/creator',creatorController.cadastrarCreator)
   .put('/creator/:id',creatorController.atualizarCreator)
   .get('/creator/:id',creatorController.listarPorId)
   .delete('/creator/:id',creatorController.deletarCreator)

export default router;