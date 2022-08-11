import { addUser, addPost, addComment, deleteUser } from '../trigger'
import {uuid} from 'uuidv4'

const Mutation = {
    inputMhs: (parent, args, ctx, info) => {
        let nimTaken = ctx.db.dataMahasiswa.some((users) => users.nim === args.data.nim) ? new Error("NIM has been available") : addUser(ctx,uuid(), args.data.nim, args.data.nama, args.data.alamat, args.data.GPA)
        // console.log(nimTaken)
        return nimTaken
    },
    deleteMhs: (parent, args, ctx, info) => {
        let deletes = deleteUser(ctx,args.id)
        // console.log(deletes)
        return deletes
    },
    createPost: (parent, args, ctx, info) => {
        // console.log(args)
        let userHasRegistered = ctx.db.dataMahasiswa.some((users) => users.id === args.data.user_id) ? addPost(ctx,uuid(), args.data.title, args.data.body, args.data.publish, args.data.user_id) : new Error("Users not found")
        // console.log(userHasRegistered)
        return userHasRegistered
    },
    createComm: (parent, args, ctx, info) => {
        let commentHasPosted = ctx.db.posting.some((posts) => posts.post_id === args.data.posts) ? addComment(ctx,uuid(), args.data.comment, args.data.posts) : new Error("Nothing posted")
        // console.log(commentHasPosted)
        return commentHasPosted
    }
}

export {Mutation}