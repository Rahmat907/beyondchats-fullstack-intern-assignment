import axios from "axios";
import  * as cheerio from "cheerio";

const LAST_PAGE_URL = "https://beyondchats.com/blogs?page=15";

const scrapeOldArticles = async () => {
  const { data } = await axios.get(LAST_PAGE_URL);
  const $ = cheerio.load(data);

  const articles = [];

  // last page ke last 5 articles
  $(".blog-card")
    .slice(-5)
    .each((_, el) => {
      const title = $(el).find("h3").text().trim();
      const url = $(el).find("a").attr("href");

      articles.push({
        title,
        url: url.startsWith("http")
          ? url
          : `https://beyondchats.com${url}`,
      });
    });

  return articles;
};

export {scrapeOldArticles}
