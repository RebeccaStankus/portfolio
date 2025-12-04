import express, { Request, Response } from "express";
import cors from "cors";
const path = require("path");
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

dotenv.config({ path: path.join(__dirname, "../../client/.env") });

const PORT = Number(process.env.PORT) || 5000;

// Routes
app.get("/health", (req: Request, res: Response) => {
     res.status(200).send("OK");
});

// Graceful shutdown
process.on("SIGINT", async () => {
     console.log("\nShutting down gracefully...");
     process.exit(0);
});

app.listen(PORT, () => {
     console.log(`   API listening on http://localhost:${PORT}`);
     console.log(`   Health: http://localhost:${PORT}/health`);
});
