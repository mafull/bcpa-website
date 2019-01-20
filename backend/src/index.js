import http from "http";

import app      from "./app";
import logger   from "./logger";


// Create the HTTP server
const server = http.createServer(app);
server.on("error", (error) => {
    if(error) throw error}
);

// Start listening for HTTP requests
const PORT = process.env.PORT ? process.env.PORT : 3001;
const HOSTNAME = process.env.HOSTNAME || "localhost";
server.listen(PORT, HOSTNAME, (error) => {
    if (error) throw error;
    logger.info(`HTTP server listening at http://${HOSTNAME}:${PORT}`);
});
