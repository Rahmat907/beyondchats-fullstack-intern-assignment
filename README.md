Phase 1 – Completed

Phase 1 objectives achieved:

Scraped the 5 oldest articles from the last page of BeyondChats blogs

Stored scraped articles in a database

Built RESTful CRUD APIs for managing articles

Phase 2 and Phase 3 are planned and will be implemented next.

🧠 Phase 1 Details
Data Source

Blog URL:
https://beyondchats.com/blogs?page=15

What Phase 1 Does

Fetches HTML content from the last blog page

Extracts:

Article title

Article URL

Stores article data in MongoDB

Exposes APIs to:

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
1️⃣ Clone the Repository
git clone <your-repo-url>
cd beyondchats-assignment

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Start the Server
npm run dev


Server will start at:

http://localhost:5000

🔌 API Endpoints (Phase 1)
➕ Create Article
POST /api/articles

📄 Get All Articles
GET /api/articles

✏ Update Article
PUT /api/articles/:id

❌ Delete Article
DELETE /api/articles/:id

🔁 Data Flow (Phase 1)

Scraper service fetches blog page HTML

Cheerio parses required article data

Data stored in MongoDB

CRUD APIs expose stored articles

🚀 Upcoming Phases
🔜 Phase 2 (In Progress)

Google search for similar ranking articles

Scrape top-ranking content

Rewrite articles using LLM APIs

Publish enhanced articles via APIs

🔜 Phase 3

React frontend to display original & updated articles

👨‍💻 Author

Rahmat
Backend Developer
Node.js | Express | MongoDB | REST APIs