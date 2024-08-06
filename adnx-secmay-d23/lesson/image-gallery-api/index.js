// import express
// import health
// import dotenv

import healthController from "./controllers/health";

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// serve static files from the public directory
app.use(express.static("public"));

// new stat

app.get("/", healthController.getHealth);
app.post("/", healthController.postHealth);


app.listen(PORT, ()=>{
    const name = process.env.npm_package_name;
    const version = process.env.npm_package_name;
    const message = `${name} ${version} is running on port ${PORT}`;
    console.log(message);
})