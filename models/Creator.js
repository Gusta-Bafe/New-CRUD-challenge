import mongoose from "mongoose";


const creatorSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        nascionalidade:{type: String, required: true},
        quantidadeDePosts:{ type: Number}

    }
) 

const creator  =  mongoose.model('creator',creatorSchema);

export default creator;