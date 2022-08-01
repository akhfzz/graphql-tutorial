import {dataMahasiswa, comment, posting} from './data'

let addUser = (id,nim, nama, alamat, GPA) => {
    const user = {id, nim, nama, alamat, GPA}
    dataMahasiswa.push(user)
    return user
}

let addPost = (post_id, title, body, publish, users) => {
    const post = {post_id, title, body, publish, users}
    posting.push(post)
    return post
}

export {addUser, addPost}