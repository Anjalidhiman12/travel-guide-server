import { Request, Response } from "express";
import { placeServiceObject } from "../service";
import { Place  } from '../schema/place-schema';

export const getPlacesByStateId = async (request: Request, response: Response) => {
    try{
        const stateId: String = request.params.id;
        let placesData: Array<Place> = await placeServiceObject.getPlacesByStateId(stateId);
        response.status(200).json(placesData);
    } catch (error) {
        response.status(500).json(error)
    }
}