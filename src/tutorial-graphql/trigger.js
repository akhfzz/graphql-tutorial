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

let updateUser = (ctx, id, data) => {
    let user = ctx.db.dataMahasiswa.find((user) => user.id === id)
    if(!user){return new Error("Student not found")}
    if(typeof data.nim === 'number'){
        ctx.db.dataMahasiswa.some((user)=> user.nim === data.nim) ? new Error("NIM has been exist") : user.nim = data.nim
    }
    if(typeof data.nama === 'string'){
        ctx.db.dataMahasiswa.some((user) => user.nama === data.nama) ? new Error("Nama has been exist") : user.nama = data.nama
    }
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

export {addUser, addPost, addComment, deleteUser, updateUser}