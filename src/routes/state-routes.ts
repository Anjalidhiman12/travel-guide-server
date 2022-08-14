import { Router} from "express";
import {StateHandler} from '../handlers'

const stateHandlerRouter= Router();


stateHandlerRouter.get("/",StateHandler.getAllStates)

stateHandlerRouter.post("/",StateHandler.createState)
stateHandlerRouter.get("/:id",StateHandler.getStateByID)
stateHandlerRouter.put("/:id",StateHandler.updateState)

export default stateHandlerRouter