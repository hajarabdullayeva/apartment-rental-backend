import express from "express";
import cors from "cors";

import http from "http";
import { config } from "./config";
import { all_path } from "./path_list";

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("main page");
});
all_path.forEach((d) => {
  app.use(d.path, d.route);
});

server.listen(config.app_port, () => {
  console.log("app is running on port : ", config.app_port);
});
