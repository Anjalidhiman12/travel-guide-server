import { Request, Response } from "express";
import { placeServiceObject } from "../service";
import { Place  } from '../schema/place-schema';

export const getPlacesByStateId = async (request: Request, response: Response) => {
    try{
        const stateId: string = request.params.id;
        let placesData: Array<Place> = await placeServiceObject.getPlacesByStateId(stateId);
        response.status(200).json(placesData);
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getPlacesById = async (request: Request, response: Response) => {
    try{
        const stateId: string = request.params.id;
        let placeData: Place = await placeServiceObject.getPlaceById(stateId);
        response.status(200).json(placeData);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const createPlace = async (request: Request, response: Response) => {
    try{
        const placePayload: any = request.body;
        
        let errormessage:string=validatePlace(placePayload);
         if(errormessage!=""){
            response.status(400).json({message:errormessage+" required"});

         }
         else{
        let placeData: Place = await placeServiceObject.createPlace(placePayload as Place);
        
           response.status(200).json(placeData);
         }
    } catch (error) {
        response.status(500).json(error)
    }
}



export const updatedPlace = async (request: Request, response: Response) => {
    try{
        const placePayload: any = request.body;
        const placeId: string = request.params.id;


        let placeData: Place = await placeServiceObject.updatePlace(placeId,placePayload );
        response.status(200).json(placeData);
    } catch (error) {
        response.status(500).json(error)
    }
}


const validatePlace=(placePayload:any):string=>{
    let errormessage="";
    if(placePayload.name==undefined||placePayload.name==null||placePayload.name.trim()=="")  errormessage=errormessage+" place name";
    if(placePayload.stateId==undefined||placePayload.stateId==null||placePayload.stateId.trim()=="")  errormessage=errormessage+" stateId";
    if(placePayload.description==undefined||placePayload.description==null||placePayload.description.trim()=="")  errormessage=errormessage+" place description";
     return errormessage;
}  