import { Request, Response } from "express";
import express from "express";
import cors from 'cors';
import stateHandlerRouter from "./routes/state-routes";

export const app = express()

const port = process.env.API_PORT || 3050;

app.use(cors())
app.use(express.json())

app.use("/state", stateHandlerRouter)

export const startServer = () => {
    app.listen(port, () => {
        console.log("Hey.. ye ye... Server started at port ", port);
    })
}

startServer();
