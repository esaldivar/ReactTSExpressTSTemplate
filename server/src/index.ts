import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 8080;

app.use(express.json());

app.use(cors());

// Route Handlers
app.use("/cats", (req: Request, res: Response) => {
  res.status(200).send("You have reached the cats route!");
});

app.use((err: Error, req: Request, res: Response) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Express + TypeScript Server");
});

// Catch-all to unknown routes (404)
app.use((req, res) => res.status(404).send("not found"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
