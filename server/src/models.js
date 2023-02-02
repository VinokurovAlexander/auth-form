import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    mail: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    isVerified: { type: Boolean, required: true },
    verificationId: { type: String, unique: true, required: true },
})

export const UserModel = model('User', UserSchema);