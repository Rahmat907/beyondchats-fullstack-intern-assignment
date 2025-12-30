import express from "express"
import {createArticle,getAllArticles,getArticleById,updateArticle,deleteArticle,scrapeAndSaveArticles} from "../controllers/article.controller.js"

console.log("2");

const router= express.Router();

// SCRAPE 
router.post('/scrape',scrapeAndSaveArticles )

// CRUD APIS

router.post("/", createArticle);
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;