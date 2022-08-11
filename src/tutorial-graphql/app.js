import { createServer } from "graphql-yoga"
import {Mutation} from './resolver/Mutation'
import {Query} from './resolver/Query'
import {Post, Comment, Student} from './resolver/Input'
import {dataMahasiswa, comment, posting} from './data'
import { readFileSync } from 'fs'

const schema = readFileSync(__dirname + '/schema.graphql', 'utf8')
// console.log(schema)

const server = createServer({
    schema: {
        typeDefs: `${schema}`, 
        resolvers: {Mutation, Query, Post, Comment, Student},
    },
    context: {
        db: {
            dataMahasiswa, comment, posting
        }
    }
})

export {server}