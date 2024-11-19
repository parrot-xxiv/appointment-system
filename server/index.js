dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoute from "./routes/testRoute.js"

const app = express();
const port = process.env.PORT || 8080;

// Allow requests from the front-end port
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

//Routes Middleware
app.use("/api/test-route/", testRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
