let typeDefs = `
    type Query{
        gretting(nama: String): [Student!]!
        numbers(number: [Int!]): Int!
        get: [Student!]
        post: [Post!]
        comment: [Comment!]!
    }

    type Mutation{
        inputMhs(data: ParamsMhs): [Student!]!
        createPost(data: ParamsPost): Post!
        createComm(data: ParamsComm): Comment!
    }

    input ParamsMhs{
        nim: Int!, nama: String!, alamat: String!, GPA: Float!
    }

    input ParamsPost{
        title: String!, body: String!, publish: Boolean!, user_id: ID!
    }

    input ParamsComm{
        comment: String!, posts: ID!
    }

    type Student{
        id: ID!
        nim: Int!
        nama: String!
        alamat: String!
        GPA: Float!
        posts: [Post!]! 
        address: String
    }
    type Post{
        post_id: String!
        title: String!
        body: String!
        publish: Boolean!
        users: Student!
        comments: [Comment!]!
    }
    type Comment{
        id: String!
        comment: String!
        posts: Post!
    }
`

export { typeDefs }