import {Schema, ObjectId, Model, model,Document} from 'mongoose'
import { get } from './db';

export interface Place{
    name:String,
    photo:String,
    description:String,
    stateID:ObjectId
}
export interface PlaceInterface extends Place, Document {

}

export interface PlaceInterfaceMethods extends Model<PlaceInterface> {
    getPlacesByStateId(stateId:string):Promise<Place[]>
    getPlaceByID(id:String):Promise<Place>
    createPlace(placePayload:Place):Promise<Place>
    updatePlace(id:String, place:any):Promise<Place>
}


const PlaceSchemaStructure = new Schema({
    name:{
        type:Schema.Types.String,
        required:true
    },
    photo:{
        type:Schema.Types.String,
        required:true
    },
    description:{
        type:Schema.Types.String,
        required:true
    },
    stateId: {
        type:Schema.Types.ObjectId,
        ref:'StateSchema'
    },
})

const PlaceModel = 'Place';

const getPlacesByStateId = async (stateId: string) : Promise<Place[]> => {
    const dbInstance = get()
    const places : Place[] = await dbInstance.model(PlaceModel).find({stateId: stateId}).exec()
    return places;
}

const getPlaceById = async (id: string) : Promise<Place> => {
    const dbInstance = get()
    const place : Place = await dbInstance.model(PlaceModel).find({_id:id}).exec()
    return place;
}

const createPlace = async (place: Place) : Promise<Place> => {
    const dbInstance = get()
    const createPlace : Place = await dbInstance.model(PlaceModel).create(place).exec()
    return createPlace;
}

const updatePlace = async (id: string, place: any) : Promise<Place> => {
    const dbInstance = get();
    const updatePlace : any = await dbInstance.model(PlaceModel).update({_id:id}, place).exec()
    if(updatePlace.n == 0) {
        console.log("Number of updated places -> ", updatePlace);
        throw new Error(`There is no such place with this state id ${id}`)
    }
    const updatedPlace : Place = await getPlaceById(id)
    return updatedPlace;
}

PlaceSchemaStructure.static('getPlacesByStateId', getPlacesByStateId)

PlaceSchemaStructure.static('getPlaceById', getPlaceById)

PlaceSchemaStructure.static('createPlace', createPlace)

PlaceSchemaStructure.static('updatePlace', updatePlace)

export const PlaceSchema = model<PlaceInterface, PlaceInterfaceMethods> (PlaceModel, PlaceSchemaStructure)