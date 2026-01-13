## Project Structure
Technical_Assessment/
frontend/ # React Tasks (Task 1, Task 5)
backend/ # Node/Express Tasks (Task 2, Task 3, Task 4, Task 6, Task 7)

## How to Run Frontend
cd frontend
npm install
npm start

## How to Run Backend
cd backend
npm install
npm run dev

Tasks Completed
 Part 1
 Task 1: React Dynamic Search Filter
 Task 2: Secure API Endpoint (/api/data)
 Task 3: Mongoose Task Schema + Query

 Part 2
 Task 4: JWT Middleware + Protected API (/api/protected)
 Task 5: Multi-step Form using Context
 Task 6: Global Error Handler (404 + 500)
 Task 7: MongoDB Aggregation Pipeline

 API Test (Postman)
 Task 2: POST /api/data
URL:
http://localhost:5000/api/data
Body (JSON):
{
  "email": "umang@gmail.com",
  "password": "12345678"
}

 Task 4: JWT Protected Route
 Get Token:
http://localhost:5000/api/get-token
 Protected API:
http://localhost:5000/api/protected

 Header:
Authorization: Bearer Token
