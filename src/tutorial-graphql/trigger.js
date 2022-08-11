let addUser = (ctx, id,nim, nama, alamat, GPA) => {
    const user = {id, nim, nama, alamat, GPA}
    ctx.db.dataMahasiswa.push(
        {
            ...user, address: "Indonesia"
        }
    )
    return ctx.db.dataMahasiswa
}

let deleteUser = (ctx, id) => {
    let deletes = ctx.db.dataMahasiswa.findIndex(user => user.id == id)
    deletes === -1 ? new Error("Student not found") : ctx.db.dataMahasiswa.splice(deletes, 1)
    ctx.db.posting = ctx.db.posting.filter((post) => {
        ctx.db.comment = ctx.db.comments.filter(com => com.postID !== post.post_id)
        // console.log(!comment)
        return post.user_id === id ? ctx.db.comment : !ctx.db.comment
    })
    return ctx.db.dataMahasiswa
}

let addPost = (ctx, post_id, title, body, publish, user_id) => {
    const post = {post_id, title, body, publish, user_id}
    ctx.db.posting.push(post)
    return post
}

let addComment = (ctx, id, comment, postID) => {
    const comm = {id, comment, postID}
    ctx.db.comments.push(comm)
    return comm
}

export {addUser, addPost, addComment, deleteUser}