import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "./GraphQL/resolvers";

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "GraphQL", "schema.graphql"),
  resolvers
});
