import mongoose,{Schema} from "mongoose";


const articlesSchema = new Schema({
title : String,
url : String,
publishedAt : String,
isUpdated :{
    type : Boolean,
    default : false,
}
},{timestamps: true})


export const Article = mongoose.model("Article", articlesSchema)