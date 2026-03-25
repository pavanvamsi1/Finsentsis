import express from "express";
import { ENV } from "./config/env";
import routes from "./routes";
import { logger } from "./utils/logger";
import { limiter } from "./middleware/ratelimit.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();


app.use(express.json());
app.use(logger);
app.use(limiter);


app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});


app.use(errorHandler);


app.listen(ENV.PORT, () => {
  console.log(`🚀 Server running on port ${ENV.PORT}`);
});