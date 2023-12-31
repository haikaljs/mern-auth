import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// POST api/users          - Register a user
// POST api/users/auth     - Authenticate user and get token
// POST api/users/logout   - Logout user and clear cookie
// GET api/users/profile   - Get user profile
// PUT api/users/profile   - Update profile
