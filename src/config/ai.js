// import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey : process.env.GROQ_API_KEY,
})
if(!process.env.GROQ_API_KEY ) {
    console.log("Does it work or not")
}

export default groq;

// console.log("alive try again")