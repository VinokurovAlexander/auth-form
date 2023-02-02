import express from 'express';
import bcrypt from 'bcrypt';
import { nanoid } from "nanoid";

import { UserModel } from "./models.js";

export const authRouter = express.Router();

authRouter.post('/signin', async (req, res) => {
    const { body: { password, mail }} = req;

    const user = await UserModel.findOne({ mail });

    if (!user) {
      res.status(403).json({ message: 'User not found' })
    } else if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({ user: { name: user.name} })
    } else {
        res.status(403).json({ message: 'Not valid password' })
    }
})


authRouter.post('/signup', async (req, res) => {
    const { body: { password, mail, name } } = req;

    const user = await UserModel.findOne({ mail });

    if (user) {
        res.status(403).json({ message: 'User is already exists' })
    } else {
        const passwordHash = await bcrypt.hash(password, 5);
        const verificationId = nanoid(6);

        const newUser = {
            mail,
            name,
            password: passwordHash,
            isVerified: false,
            verificationId
        }

        try {
            await UserModel.create(newUser);
            res.status(200).json({ user: { name }})
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
})
