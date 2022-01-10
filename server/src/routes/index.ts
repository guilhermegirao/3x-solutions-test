import { Router } from "express";

import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";

import authenticate from "../middlewares/auth";

const routes = Router();

routes.post("/signin", AuthController.signin);
routes.post("/signup", AuthController.signup);

routes.get(
  "/users/find/by/user-logged",
  authenticate,
  UserController.findByUserLogged
);

export default routes;
