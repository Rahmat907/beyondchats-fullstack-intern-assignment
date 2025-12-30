import mongoose,{Schema} from "mongoose";

console.log("4");

const articlesSchema = new Schema({
tittle : String,
slug : String,
content : String,
url : String,
publishedAt : String,
isUpdated :{
    type : Boolean,
    default : false,
}
},{timestamps: true})


export const Article = mongoose.model("Article", articlesSchema)