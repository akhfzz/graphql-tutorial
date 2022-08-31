import {withFilter} from "graphql-subscriptions"

let Subscription = {
    count: {
        subscribe: (parent, args, ctx, info) => {
            let count = 0
            setInterval(() => {
                count++
                ctx.pubsub.publish('count', {
                    count
                })
            }, 1000)
            return ctx.pubsub.asyncIterator('count')
        }
    },
    comment_user: {
        subscribe: (parent, args, ctx, info) => {
            // return withFilter(
            //     () => ctx.pubsub.asyncIterator(`comment_user`),
            //     (payload, variables) => {
            //         console.log(payload)
            //     }
            // )
            console.log(ctx.pubsub)
            return ctx.pubsub.asyncIterator(`comment_user ${args.post_id}`)
        }
    },
    users: {
        subscribe: (parent, args, ctx, info) => {
            const user = ctx.db.dataMahasiswa.find((users) => users.nama === args.nama)
            return ctx.pubsub.asyncIterator(`users`)
        }
    },
    comment: {
        subscribe: (parent, args, ctx, info) => {
            return ctx.pubsub.asyncIterator('comment')
        }
    }
}

export {Subscription}