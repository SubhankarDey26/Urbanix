import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes/auth.routes.js"


const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));




app.use("/api/auth",router)

export default app;