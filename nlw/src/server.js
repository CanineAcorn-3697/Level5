// Importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Iniciando o espress
const server = express();
server
  //Utilizando "body" do "req"
  .use(express.urlencoded({ extended: true }))
  //utilizando os arquivos estáticos
  .use(express.static("public"))

  // Configurando Template Engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // Rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// Ligando o Servidor
server.listen(5500);
