import cookieParser from "cookie-parser";
import express      from "express";
import morgan       from "morgan";

import logger from "./logger";
import router from "./routes";


const app = new express();

// Configure third-party middleware
app.use(cookieParser());
app.use(morgan(
    ":remote-addr -> :method :url -> :status",
    { "stream": logger.stream }
));

// Configure routes
app.use("/api", router);


export default app;
