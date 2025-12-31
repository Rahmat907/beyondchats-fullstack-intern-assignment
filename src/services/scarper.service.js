import axios from "axios";
import  * as cheerio from "cheerio";

const LAST_PAGE_URL = "https://beyondchats.com/blogs?page=15";

const scrapeOldArticles = async () => {
  const { data } = await axios.get(LAST_PAGE_URL);
  const $ = cheerio.load(data);
  // console.log($);
  const articles = [];
  // console.log(data.slice(0, 5000));
  // last page ke last 5 articles
 $("article").each((_, el) => {
    const heading = $(el).find("h1, h2, h3").first();
    const title = heading.text().trim();

    const link =
      heading.find("a").attr("href") ||
      $(el).find("a").first().attr("href");

    if (title && link) {
      articles.push({
        title,
        url: link.startsWith("http")
          ? link
          : `https://beyondchats.com${link}`,
      });
    }
  });

    const articles_five = articles.slice(-5);
    for(let x of articles_five){
        console.log(x)
      }
  return articles_five;
};
export {scrapeOldArticles}
