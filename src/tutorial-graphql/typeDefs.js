let typeDefs = `
    type Query{
        gretting(nama: String): [Student!]!
        numbers(number: [Int!]): Int!
        get: [Student!]
        post: [Post!]
        comment: [Comment!]
    }

    type Mutation{
        inputMhs(nim: Int!, nama: String!, alamat: String!, GPA: Float!): Student!
        createPost(title: String!, body: String!, publish: Boolean!, user_id: ID!): Post!
    }

    type Student{
        id: ID!
        nim: Int!
        nama: String!
        alamat: String!
        GPA: Float!
        posts: [Post!]! 
    }
    type Post{
        post_id: String!
        title: String!
        body: String!
        publish: Boolean!
        users: Student!
        comment: Comment!
    }
    type Comment{
        id: String
        comment: String
        posts: Post!
    }
`

export { typeDefs }