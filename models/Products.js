
let mongoose=    require('mongoose')
      let productSchema=   new  mongoose.Schema({
        name:{
            type:String
        },
        descriptions:{
            type:String
        },
        price:{
            type:Number
        },
        image:{
            type:String
        },
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        }    

      })

     let Product=    mongoose.model('Product',productSchema)
     module.exports=Product

    




         


    