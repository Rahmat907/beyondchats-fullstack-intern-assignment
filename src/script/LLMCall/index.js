import Groq from "groq-sdk";

const groq = new Groq({
    apiKey : process.env.GROQ_KEY,
})

export default groq;