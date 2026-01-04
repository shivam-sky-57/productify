import express from "express";
import cors from "cors";
import {ENV} from "./config/env";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL}))
app.use(clerkMiddleware()) //auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies.
app.use(express.urlencoded({ extended: true })); // parse form data (like HTML forms).



app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:",ENV.PORT));