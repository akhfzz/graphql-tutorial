import { createServer } from "graphql-yoga";
import { typeDefs } from "./typeDefs";
import { resolvers } from './resolver'

let schema = {
    typeDefs, resolvers
}

const server = createServer({
    schema
})

export {server}