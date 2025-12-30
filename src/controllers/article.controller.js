import {Article}  from "../models/article.model.js";
import {scrapeOldArticles} from "../services/scarper.service.js"

const createArticle = async (req, res) => {
  try {
    console.log("Hello World")
    const article = await Article.create(req.body); // save the article in the database 
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const scrapeAndSaveArticles = async (req, res) => {
  try {
    const scrapedArticles = await scrapeOldArticles();

    const savedArticles = [];

    for (const article of scrapedArticles) {
      const exists = await Article.findOne({ url: article.url });

      if (!exists) {
        const saved = await Article.create(article); // SAVE HERE
        savedArticles.push(saved);
      }
    }

    res.status(201).json({
      message: "Articles scraped and saved",
      count: savedArticles.length,
      data: savedArticles,
    });
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {createArticle,getAllArticles,getArticleById,updateArticle,deleteArticle,scrapeAndSaveArticles}