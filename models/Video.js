import mongoose from "mongoose";

const videosSchema = new mongoose.Schema(
    {
        _id:{type : String},
        title: {type : String,  required: true},
        creator: { type : String, required: true},
        time: { type : Number}
    }
)

const videos = mongoose.model('videos', videosSchema);

export default videos;