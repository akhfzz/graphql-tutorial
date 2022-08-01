const dataMahasiswa = [
    {
        id: 'abv',
        nim: 192102001,
        nama: 'agnes',
        alamat: 'jawa barat',
        GPA: 2.7
    },
    {
        id:'acv',
        nim: 192102002,
        nama: "faizal",
        alamat: 'Yogyakarta',
        GPA: 2
    },
    {
        id: 3,
        nim: 192102003,
        nama: 'alfabet',
        alamat: 'wonosobo',
        GPA: 3.2
    }
]

const posting = [
    {
        post_id: 'Abcxn',
        title: "Crown",
        body: 'The suhu is 18',
        publish: false,
        user_id: 'acv'
    },
    {
        post_id: 'Bcaxn',
        title: "News",
        body: 'The suhu is 18',
        publish: true,
        user_id: 3
    },
    {
        post_id: 'Bcbxn',
        title: "News",
        body: 'The suhu is 18',
        publish: true,
        user_id: 'abv'
    }
]

const comment = [
    {
        id: '2Ab',
        comment: 'so cool',
        postID: 'Bcaxn',
    },
    {
        id: '2AC',
        comment: 'good idea',
        postID: 'Abcxn'
    }
]

export {dataMahasiswa, comment, posting}