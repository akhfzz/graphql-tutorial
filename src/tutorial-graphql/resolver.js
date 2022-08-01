import {dataMahasiswa, posting, comment} from './data'
import { addUser, addPost } from './trigger'
import {uuid} from 'uuidv4'

let resolvers = {
    Mutation:{
        inputMhs: (parent, args, ctx, info) => {
            let nimTaken = dataMahasiswa.some((users) => users.nim === args.nim) ? new Error("NIM has been available") : addUser(uuid(), args.nim, args.nama, args.alamat, args.GPA)
            return nimTaken
        },
        createPost: (parent, args, ctx, info) => {
            // console.log(args)
            let userHasRegistered = dataMahasiswa.some((users) => users.id === args.user_id) ? addPost(uuid(), args.title, args.body, args.publish, args.user_id) : new Error("Users not found")
            console.log(userHasRegistered)
            return userHasRegistered
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
        },
    },
    Post: {
        users: (parent, args,ctx, info) => {
            let data = dataMahasiswa.find((users) =>{
                console.log(parent)
                return users.id === parent.users
            })
            return data
        },

        comment: (parent, args, ctx, info) => {
            let data = comment.find((comm) => {
                return comm.postID === parent.post_id
            })
            return data
        }
    },
    Comment: {
        posts: (parent, args, ctx, info) =>{
            let data = posting.find((posted) => {
                // console.log(parent)
                return posted.post_id === parent.postID
            })
            return data
        }
    },
    Student: {
        posts: (parent, args, ctx, info) => {
            let data = posting.filter((posted) => {
                console.log(posted)
                return posted.user_id === parent.id
            })
            return data
        }
    }
}

export {resolvers}