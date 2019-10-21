const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const path = require("path");

class App {
  constructor() {
    this.express = express();
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.views();
    this.routes();
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, "views"), {
      watch: true,
      express: this.express,
      autoescape: true
    });

    this.express.use(express.static(path.resolve(__dirname, "public")));
    this.express.set("view engine", "njk");
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
