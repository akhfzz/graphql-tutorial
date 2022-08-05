import {dataMahasiswa, posting, comment} from './data'
import { addUser, addPost, addComment } from './trigger'
import {uuid} from 'uuidv4'

let resolvers = {
    Mutation:{
        inputMhs: (parent, args, ctx, info) => {
            let nimTaken = dataMahasiswa.some((users) => users.nim === args.data.nim) ? new Error("NIM has been available") : addUser(uuid(), args.data.nim, args.data.nama, args.data.alamat, args.data.GPA)
            console.log(nimTaken)
            return nimTaken
        },
        createPost: (parent, args, ctx, info) => {
            // console.log(args)
            let userHasRegistered = dataMahasiswa.some((users) => users.id === args.data.user_id) ? addPost(uuid(), args.data.title, args.data.body, args.data.publish, args.data.user_id) : new Error("Users not found")
            // console.log(userHasRegistered)
            return userHasRegistered
        },
        createComm: (parent, args, ctx, info) => {
            let commentHasPosted = posting.some((posts) => posts.post_id === args.data.posts) ? addComment(uuid(), args.data.comment, args.data.posts) : new Error("Nothing posted")
            // console.log(commentHasPosted)
            return commentHasPosted
        }
    },
    Query: {
        gretting: (parent, args,ctx, info) => {
            if(!args.nama){
                return dataMahasiswa
            }
            let data = dataMahasiswa.filter((dt) =>{
                return dt.nama.toLowerCase().includes(args.nama.toLowerCase())
            })
            console.log(data)
            return data
        },
        get: () => {
            return dataMahasiswa
        },
        numbers: (parent, args, ctx, info) => {
            if(!args.nama){
                return dataMahasiswa
            }
            return args.number.reduce((accumulator, currentValue)=>{
                return currentValue - accumulator
            })
        },
        post: (parent, args, ctx, info) => {
            // if(!args.publish){
            //     return posting
            // }
            // let data = posting.filter((data) => {
            //     return data.publish == args.publish
            // })
            // return data
            return posting
        },
        comment: () => {
            return comment
        }
    },
    Post: {
        users: (parent, args,ctx, info) => {
            let data = dataMahasiswa.find((users) =>{
                return users.id === parent.user_id
            })
            // console.log(data)
            return data
        },

        comments: (parent, args, ctx, info) => {
            let data = comment.filter((comm) => {
                return comm.postID === parent.post_id
            })
            return data
        }
    },
    Comment: {
        posts: (parent, args, ctx, info) =>{
            let data = posting.find((posted) => {
                return posted.post_id === parent.postID
            })
            return data
        }
    },
    Student: {
        posts: (parent, args, ctx, info) => {
            let data = posting.filter((posted) => {
                return posted.user_id === parent.id
            })
            return data
        }
    }
}

export {resolvers}