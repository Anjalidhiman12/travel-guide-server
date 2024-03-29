import {request, Request, Response} from 'express';
import { stateServiceObject } from '../service';
import { State } from '../schema/state-schema';

export const getAllStates = async(request: Request, response: Response) => {
    try{
        let statesData: Array<State> = await stateServiceObject.getAllStates();
        response.status(200).json(statesData) 
    }catch (error) {
        response.status(500).json(error)
    }
}

export const getStateByID = async(request: Request, response: Response) => {
    try{
        const stateByID :String= request.params.id;
        let state: State = await stateServiceObject.getStateById(stateByID);
        response.status(200).json(state)
    }catch (error) {
        response.status(500).json(error)
    }
}

export const createState = async(request: Request, response: Response) => {
    try{
        let statePayload :State = request.body ;
        console.log("statePayload ",statePayload)
        let createState: State = await stateServiceObject.createState(statePayload);
        response.status(200).json(createState)
    }catch (error) {
    
        response.status(500).json(error)
    }
}

export const updateState = async(request: Request, response: Response) => {
    try{
        const stateID:String = request.params.id;
        const updateStatePayload :any= request.body;
        let updatedState: State = await stateServiceObject.updateState(stateID, updateStatePayload);
        response.status(200).json(updatedState)
    }catch (error) {
        response.status(500).json(error)
    }
}