import { Router} from "express";
import {PlaceHandler} from '../handlers'
const placeHandlerRouter= Router();


placeHandlerRouter.get("states/:id",PlaceHandler.getPlacesByStateId)

placeHandlerRouter.post("/",PlaceHandler.createPlace)
placeHandlerRouter.get("/:id",PlaceHandler.getPlacesById)
placeHandlerRouter.put("/:id",PlaceHandler.updatedPlace)

export default placeHandlerRouter;