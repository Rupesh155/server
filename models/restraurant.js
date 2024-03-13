       let mongoose=    require('mongoose')
          let restraurantSchema=  new mongoose.Schema({
            name:{
                type:String,
                // required:true
            },
            address:{
                type:String,
                // required:true

            },
            description:{
                type:String,
                // required:true

            },
            image:{
                type:String,
                // required:true

            },
            Contact:{
                type:Number,
                // required:true
            }
          

        })

    let Restraurant=  mongoose.model('Restraurant',restraurantSchema)

    module.exports=Restraurant