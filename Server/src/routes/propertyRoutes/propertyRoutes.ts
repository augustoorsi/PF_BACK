import { Router } from 'express';
import getAllPropHandler from './handlers/getAllPropHandler';
import getPropByIdHandler from './handlers/getPropByIdHandler';
import createPropHandler from './handlers/createPropHandler';
import updatePropertyStatusHandler from './handlers/updatePropertyStatusHandler';
import updatePropertyHandler from './handlers/updatePropertyHandler';
import getAllPropertiesDashHandler from './handlers/getAllPropertiesDashHandler';

const propertyRoutes = Router();

propertyRoutes.get('/', getAllPropHandler);

propertyRoutes.get('/all', getAllPropertiesDashHandler);

propertyRoutes.get('/:id', getPropByIdHandler);

propertyRoutes.post('/', createPropHandler);

propertyRoutes.put('/:id/deactivate', updatePropertyStatusHandler);

propertyRoutes.put('/update/:id/', updatePropertyHandler);

export default propertyRoutes;