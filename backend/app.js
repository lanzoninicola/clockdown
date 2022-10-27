/**
 * Handling the status of merchant. OPEN, CLOSED
 * Handling orders events
 */

require("dotenv").config();

const http = require("http");
const database = require("./src/database/index");
const setupAuthentication = require("./src/auth/main");
const setupRoutes = require("./src/routes");
const setupServer = require("./app.server");

require("./src/utils/proto");

setupAuthentication();

const app = setupServer();
const server = setupRoutes(app);

const port = process.env.SERVER_PORT || 5000;
http.createServer(server).listen(
    port,
    process.env.IP || "0.0.0.0",
    async () => {
        console.log(
            "Server *** CLOCKDOWN-BACKEND *** listening on port %d, in %s mode",
            port,
            process.env.NODE_ENV || "production",
            "Version",
            "1.0R4"
        );
        try {
            await database.initDatabase();

            
        } catch (error) {
            console.error({
                source: "app.js",
                message: error.message,
                stack: error.stack
            });
            process.exit(-1);
        }
    }
);
