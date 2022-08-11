const Query = {
    gretting: (parent, args,ctx, info) => {
        if(!args.nama){
            return ctx.db.dataMahasiswa
        }
        let data = ctx.db.dataMahasiswa.filter((dt) =>{
            return dt.nama.toLowerCase().includes(args.nama.toLowerCase())
        })
        console.log(data)
        return data
    },
    get: (parent, args, ctx, info) => {
        return ctx.db.dataMahasiswa
    },
    numbers: (parent, args, ctx, info) => {
        if(!args.nama){
            return ctx.db.dataMahasiswa
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
        return ctx.db.posting
    },
    comment: (parent, args, ctx, info) => {
        return ctx.db.comment
    }
}

export {Query}