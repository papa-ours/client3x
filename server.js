//Install express server
import express from "express";
import * as cors from cors;

const app = express();
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/www"));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);