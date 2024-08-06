import express from "express";
import helloWorld from "./controller/hello-world.js";
import helloUser from "./controller/hello-user.js";
import helloUserAge from "./controller/hello-user-age.js";
import helloAdmin from "./controller/hello-admin.js";
import register from "./controller/register.js";

export const app = express();
export const PORT = 8080;

// middleware
// for passing request body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// function expression
app.get("/", helloWorld);

// param
// param start with colon (:)
// params is a dynamic value that can be access by request param
app.get("/hello/admin", helloAdmin);
app.get("/hello/:name", helloUser);
app.get("/hello/:name/:dob", helloUserAge);

// register a user
app.post("/register", register);

app.listen(PORT, function () {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
