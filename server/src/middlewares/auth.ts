import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import User from "../models/User";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Nenhum token fornecido." });

  const [scheme, token] = authHeader.split(" ");

  if (!token || !/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Formato de token inválido." });

  try {
    const user = await jwt.verify(token, process.env.AUTH_SECRET as string);
    const validUser = await User.findById(user?.id);

    if (!validUser)
      return res.status(401).json({ error: "Acesso não autorizado!" });

    res.locals.id = user?.id;
  } catch (err) {
    return res.status(401).json({ error: "Token mal formatado!" });
  }

  return next();
}
