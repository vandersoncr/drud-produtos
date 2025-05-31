import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import validateEnv from "./utils/validateEnv";
import router from "./router/router";
import { engine } from "express-handlebars";
import * as helpers from "./views/helpers/helpers";  

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 5577;

app.engine(
  "handlebars",
  engine({
    helpers,
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/layouts`,
  })
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use(logger("combined"));
app.use("/css", express.static(`${process.cwd()}/public/css`));
app.use("/js", express.static(`${process.cwd()}/public/js`));
app.use("/img", express.static(`${process.cwd()}/public/img`));
app.use(express.urlencoded({extended: false}));
app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
