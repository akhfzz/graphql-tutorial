const Post = {
    users: (parent, args,ctx, info) => {
        let data = ctx.db.dataMahasiswa.find((users) =>{
            return users.id === parent.user_id
        })
        // console.log(data)
        return data
    },

    comments: (parent, args, ctx, info) => {
        let data = ctx.db.comment.filter((comm) => {
            return comm.postID === parent.post_id
        })
        return data
    }
}
const Comment = {
    posts: (parent, args, ctx, info) =>{
        let data = ctx.db.posting.find((posted) => {
            return posted.post_id === parent.postID
        })
        return data
    }
}
const Student = {
    posts: (parent, args, ctx, info) => {
        let data = ctx.db.posting.filter((posted) => {
            return posted.user_id === parent.id
        })
        return data
    }
}

export {Comment, Student, Post}