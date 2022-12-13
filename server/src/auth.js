import express from 'express';

import { UserModel } from "./models.js";

export const authRouter = express.Router();

authRouter.post('/signin', async (req, res) => {
   const { body: { password, email } } = req;

   const user = await UserModel.findOne({ email });

   if (!user) {
      res.status(403).json({ message: 'User not found'})
   }
})
