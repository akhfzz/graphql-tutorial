import { createServer} from "graphql-yoga"
import { PubSub } from "graphql-subscriptions"
import {Mutation} from './resolver/Mutation'
import {Query} from './resolver/Query'
import {Subscription} from './resolver/Subscription'
import {Post, Comment, Student} from './resolver/Input'
import {dataMahasiswa, comment, posting} from './data'
import { readFileSync } from 'fs'

const schema = readFileSync(__dirname + '/schema.graphql', 'utf8')
const pubsub = new PubSub()
// const SOMETHING_CHANGED_TOPIC = 'something_changed';
// console.log(Subscription)

const server = createServer({
    schema: {
        typeDefs: `${schema}`, 
        resolvers: {Mutation, Query, Subscription,Post, Comment, Student}
    },
    context: {
        db: {
            dataMahasiswa, comment, posting
        },
        pubsub
    }
})


// const server = createServer({
//     schema: {
//         typeDefs: `${schema}`, 
//         resolvers: {Mutation, Query, Post, Comment, Student, 
//             Subscription:{
//                 count: {
//                     subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC),
//                 }
//             }},
//     },
//     context: {
//         db: {
//             dataMahasiswa, comment, posting
//         },
//         pubsub
//     }
// })

export {server}