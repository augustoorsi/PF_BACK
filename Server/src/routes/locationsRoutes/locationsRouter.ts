import { Router } from "express";
import getProvincesHandler from "./handlers/getProvincesHandler";
import getLocationsByProvince from "./handlers/getLocationsByProvinceHandler";

const locationsRouter = Router();

locationsRouter.get('/', getProvincesHandler)

locationsRouter.get('/:province', getLocationsByProvince)

export default locationsRouter;