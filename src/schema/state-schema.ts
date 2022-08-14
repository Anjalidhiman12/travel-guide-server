import {Schema, Document, Model, model} from 'mongoose'
import { get } from './db'

export interface State{
    name:String,
    photos:String,
}

export interface StateInterface extends State, Document {

}

export interface StateInterfaceMethods extends Model<StateInterface> {
    getAllStates():Promise<State[]>
    getStateById(id: String):Promise<State>
    createState(statePayload: State):Promise<State>
    updateState(id:String, state : any):Promise<State>
}

const StateModel = 'State';

const StateSchemaStructure = new Schema({
    name:{
        type:Schema.Types.String,
        // required:true
    },
    photos:{
        type:Schema.Types.String,
    }
})

const getAllStates = async () : Promise<State[]> => {
   const dbInstance = get()
   const states : State[] = await dbInstance.model(StateModel).find({}).exec()
   return states;
}

const getStateById = async (id : string) :Promise<State> => {
    const dbInstance = get()
    const state : State = await dbInstance.model(StateModel).find({_id : id}).exec()
    return state;
}

const createState = async (state : State) : Promise<State> => {
    const dbInstance = get()
    const createState : State = await dbInstance.model(StateModel).create(state).exec()
    return createState;
}

const updateState = async (id : string, state : any) : Promise<State> => {
    const dbInstance = get()
    const updateState : any = await dbInstance.model(StateModel).update({_id : id}, state).exec()
    if(updateState.n == 0) {
        console.log("Number of updated states -> ", updateState);
        throw new Error(`There is no such state with this id ${id}`)
        
    }
    const updatedState : State = await getStateById(id)
    return updatedState;
}

StateSchemaStructure.static('getAllStates', getAllStates)

StateSchemaStructure.static('getStateById', getStateById)

StateSchemaStructure.static('createState', createState)

StateSchemaStructure.static('updateState', updateState)

export const StateSchema = model<StateInterface, StateInterfaceMethods> (StateModel, StateSchemaStructure)


