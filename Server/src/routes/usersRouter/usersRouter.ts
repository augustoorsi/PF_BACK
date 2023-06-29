import { Router } from "express";
import createUsersHandler from "./handler/createUsersHandler";
import getUsersHandler from "./handler/getUsersHandler";
import getUsersByIdHandler from "./handler/getUsersByIdHandler";
import updateUsersHandler from "./handler/updateUsersHandler";
import updateFavoritesHandler from "./handler/updateFavoritesHandler"
import getFavoritesHandler from "./handler/getFavoritesHandler";
import deleteFavoriteHandler from "./handler/deleteFavoriteHandler";
import getAllUsersHandler from "./handler/getAllUsersHandler";

const usersRouter: Router = Router();


usersRouter.get("/", getAllUsersHandler)

usersRouter.get("/:id", getUsersByIdHandler)

usersRouter.get("/:id_user/favorites", getFavoritesHandler)

usersRouter.post('/', createUsersHandler)

usersRouter.post('/:id_user/favorites/:id_property', updateFavoritesHandler)

usersRouter.delete('/:id_user/favorites/:id_property', deleteFavoriteHandler)

usersRouter.put('/update/:id', updateUsersHandler)




export default usersRouter;