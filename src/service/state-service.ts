import { StateSchema, State } from '../schema/state-schema'

class StateService {

    getAllStates = async () : Promise<Array<State>> => {
        const states : State[] = await StateSchema.getAllStates();
        return states;
    }

    getStateById = async (id : String) : Promise<State> => {
        const state : State = await StateSchema.getStateById(id);
        return state;
    }

    createState = async (state : State) : Promise<State> => {
        const createState : State = await StateSchema.createState(state);
        console.log("createdState ",createState)
        return createState;
    }

    updateState = async (id : String, state : any) : Promise<State> => {
        const updatedState : State = await StateSchema.updateState(id, state);
        return updatedState;
    }
}
export const stateServiceObject = new StateService()
