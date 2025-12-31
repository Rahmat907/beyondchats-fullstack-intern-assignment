Phase 1 – Completed

Phase 1 has been successfully completed.
In this phase, the focus was on scraping blog data and building a solid backend foundation using REST APIs.

What was achieved in Phase 1:

Scraped the 5 oldest articles from the last page of BeyondChats blogs

Stored the scraped article data in MongoDB

Built RESTful CRUD APIs to manage articles (Create, Read, Update, Delete)

Phase 2 and Phase 3 are planned and will be implemented next.

Phase 1 Details
Data Source
Blog URL:
https://beyondchats.com/blogs?page=15

What Phase 1 Does

Fetches HTML content from the last page of the blog

Extracts the following information:

Article title

Article URL

Stores the extracted data in MongoDB

Exposes REST APIs to:

Create articles

Read articles

Update articles

Delete articles

🏗 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Web Scraping: Axios, Cheerio

Architecture: REST API

Environment: ES Modules

📁 Project Structure
src/
├── controllers/
│   └── article.controller.js
├── models/
│   └── article.model.js
├── routes/
│   └── article.routes.js
├── services/
│   └── scraper.service.js
├── config/
│   └── db.js
├── app.js
└── server.js

⚙️ Local Setup Instructions
1. Clone the Repository
git clone <your-repo-url>
cd beyondchats-assignment

2. Install Dependencies
npm install

3. Environment Variables

Create a .env file in the root directory and add the following:

PORT=7000
MONGO_URI=your_mongodb_connection_string

4. Start the Server
npm run dev


The server will start at:

http://localhost:5000

🔌 API Endpoints (Phase 1)
Create Article
POST /api/articles

Get All Articles
GET /api/articles

Update Article
PUT /api/articles/:id

Delete Article
DELETE /api/articles/:id

🔁 Data Flow (Phase 1)

The scraper service fetches the blog page HTML

Cheerio parses the required article data

The extracted data is stored in MongoDB

CRUD APIs expose the stored articles

🚀 Upcoming Phases
Phase 2 (In Progress)

Perform Google search for similar top-ranking articles

Scrape content from ranking blogs

Rewrite and enhance articles using LLM APIs

Publish enhanced articles using the existing CRUD APIs

Phase 3

Build a React frontend to display:

Original scraped articles

AI-enhanced rewritten articles

👨‍💻 Author

Rahmat
Backend Developer

Tech: Node.js | Express | MongoDB | REST APIs