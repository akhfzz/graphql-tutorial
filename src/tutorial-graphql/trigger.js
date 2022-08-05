import {dataMahasiswa, comment as comments, posting} from './data'

let addUser = (id,nim, nama, alamat, GPA) => {
    const user = {id, nim, nama, alamat, GPA}
    dataMahasiswa.push(
        {
            ...user, address: "Indonesia"
        }
    )
    return dataMahasiswa
}

let addPost = (post_id, title, body, publish, user_id) => {
    const post = {post_id, title, body, publish, user_id}
    posting.push(post)
    return post
}

let addComment = (id, comment, postID) => {
    const comm = {id, comment, postID}
    comments.push(comm)
    return comm
}

export {addUser, addPost, addComment}