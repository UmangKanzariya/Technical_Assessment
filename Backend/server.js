const express = require("express")
const app = express()

app.use(express.json())

// Routes
const dataRoute = require("./routes/dataRoute")
const protectedRoute = require("./routes/protectedRoute")
const tokenRoute = require("./routes/tokenRoute");

app.use("/api", tokenRoute);
app.use("/api", dataRoute)
app.use("/api", protectedRoute)

// Error Middlewares
const { notFound, errorHandler } = require("./Middleware/errorHandler")
app.use(notFound)
app.use(errorHandler)

app.listen(5000, () => console.log("Backend running on port 5000"))
