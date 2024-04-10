import express, { Application, Request, Response } from "express";
import { showHelloWorld } from "./controller";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== ここから、ルーティングを指定して記載

app.get("/", showHelloWorld);

// ===== ここまで ルーティングの記載

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
