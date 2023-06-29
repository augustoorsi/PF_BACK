import { Router } from 'express';
import getAllServices from './handlers/getAllServices';


const serviceRoutes = Router();

serviceRoutes.get('/', getAllServices);

export default serviceRoutes;