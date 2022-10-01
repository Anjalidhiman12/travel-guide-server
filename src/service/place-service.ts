import { PlaceSchema, Place } from "../schema/place-schema";

class PlaceService {
    getPlacesByStateId = async (stateId: string) : Promise<Array<Place>> => {
        const places : Place[] = await PlaceSchema.getPlacesByStateId(stateId);
        return places;
    }

    getPkaceById = async (id: string) : Promise<Place> => {
        const place : Place = await PlaceSchema.getPlaceByID(id);
        return place;
    }

    createPlace = async (place: Place) : Promise<Place> => {
        const createPlace : Place = await PlaceSchema.createPlace(place);
        return createPlace;
    }

    updatePlace = async (id: String, place: any) : Promise<Place> => {
        const updatedPlace : Place = await PlaceSchema.updatePlace(id, place);
        return updatedPlace;
    }
}

export const placeServiceObject = new PlaceService()