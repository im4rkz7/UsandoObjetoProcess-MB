import { Router } from "express";

const infoRouter = Router();

infoRouter.get("/", (req, res) => {
  const info = {
    argumentosEntrada: process.argv,
    SO: process.platform,
    version: process.version,
    memoria: process.memoryUsage().rss,
    path: process.argv[1],
    processId: process.pid,
    carpeta: process.cwd(),
  };

  res.json(info);
});

export default infoRouter;
