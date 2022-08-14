import {Schema, ObjectId} from 'mongoose'

export interface Place{
    name:String,
    photo:String,
    description:String,
    stateID:ObjectId
}

const PlaceSchema = new Schema({
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