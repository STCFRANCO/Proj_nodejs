const express = require("express");

const app = express();
const port = 5500;

const listanode = require("./node/lista");
const sequelize = require("./conection");
const Lista = require("./models/lista");

Lista.sync();

app.use(express.json());
app.use("/lista", listanode.node);

app.listen(port, () => {
  console.log(`Servidor pelo porta http://localhost:${port}`);
});
