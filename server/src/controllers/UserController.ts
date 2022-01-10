import { Request, Response } from "express";

import User from "../models/User";

export default {
  async findByUserLogged(req: Request, res: Response) {
    const userIdLogged = res.locals.id;

    try {
      const user = await User.findById(userIdLogged);

      return res.status(200).json({ user });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Falha ao retornar as informações de seu usuário!" });
    }
  },
};
