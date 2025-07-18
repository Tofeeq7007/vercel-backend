import express from 'express'
import { get_current_user, login, logout, register } from '../controller/auth.controller.js';
import { auth_me } from '../middlware/authme.js';
import cookieParser from "cookie-parser";
const authRoutes = express.Router();
authRoutes.use(cookieParser());
authRoutes.post('/register' ,register);
authRoutes.post('/login' , login);
authRoutes.post('/logout' , logout);
authRoutes.get("/me",auth_me, get_current_user)////

export default authRoutes;