const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./GraphQL/resolvers");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env" });

try {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  console.log(err);
}

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "GraphQL", "schema.graphql"),
  resolvers
});

server.express.use(express.static(path.join(__dirname, "../../client/build")));

server.start({ port: 3000 });
