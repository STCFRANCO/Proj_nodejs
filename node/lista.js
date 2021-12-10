const express = require("express");
const Lista = require("../models/lista");

const node = express.Router();

node.get("/", async (req, res) => {
  const lista = await Lista.findAll();
  res.send({ lista });
});

node.get("/:id", async (req, res) => {
  const lista = await Lista.findByPk(req.params.id);
  if (lista) {
    res.send({ lista });
  } else {
    res.status(404).send("Item nao encontrada ");
  }
});

node.post("/new", async (req, res) => {
  if (req.body.description && req.body.done) {
    const lista = await Lista.create({
      description: req.body.description,
      done: req.body.done,
    });
    res.status(201).send(lista);
  } else {
    res.status(400).send("Registro nao encontrado");
  }
});

node.put("/:id", async (req, res) => {
  const lista = await Lista.findByPk(req.params.id);
  if ((lista && req.body.description) || req.body.done) {
    await lista.update(req.body);
    res.send(lista);
  } else {
    res.status(404).send("Update nao realizada");
  }
});

node.delete("/:id", async (req, res) => {
  const lista = await Lista.findByPk(req.params.id);
  if (lista) {
    await lista.destroy();
    res.send("Deletado!!!!");
  } else {
    res.status(404).send("Item  nao encontrada");
  }
});

module.exports.node = node;
