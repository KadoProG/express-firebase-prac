import { Request, Response } from "express";

export const showHelloWorld = async (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello World!",
  });
};
