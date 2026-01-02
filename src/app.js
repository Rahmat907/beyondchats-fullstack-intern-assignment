import express from "express";
import articleRoute from "./routes/article.route.js"
const app = express();


app.use(express.json());
app.use("/api/articles", articleRoute);

export default app