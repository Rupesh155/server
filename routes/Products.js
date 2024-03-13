const express = require('express');
const router = express.Router();
 let Product=     require('../models/Products')
   let Restraurant=   require('../models/restraurant')
//  create api for Product
router.post('/product', async (req, res) => {
    try {
      const { name, description, price,image ,restroId } = req.body;
      const restaurant = await Restraurant.findById(restroId);
      console.log(restaurant,"rrr");
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      // Create a new product associated with the restaurant
      const product = new Product({
        name,
        description,
        image,
        price,
        restaurant: restroId
      });
      // Save the product to the database
      await product.save();

      return res.status(201).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });
   //   get all Restraurant 
 router.get('/product',  async (req,res)=>{  

    try{
        let product=  await Product.find()
        if(!product){

          return res.send('products not foundddd')
          
        }
        else{
          return   res.send(product)
        }

    }
    catch{
        console.log('err');
       return  res.send({msg:"errrr"})

    }

 })
//    get particular products by id
 router.get('/product/:id',  async (req,res)=>{


    try{
       let product=    await   Product.findById(req.params.id)
       if(!product){
          return res.status(404).send('not founddddd')

       }
       else{
            return res.send(product)
       }

    }
    catch{
       return res.send('err')
    }
        
})
//  update productss by id
router.patch('/product/:id',   async(req,res)=>{
    try{
        let product=      await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
         if(product){
            res.send(product)
         }
         else{
           return  res.send('not foundddddd not updateddddd')
         }
    }
    catch (err){
        console.log('errr' ,  err);
    }      

} )

router.delete('/product/:id', async(req,res)=>{

    try{
        let product=   await  Product.findByIdAndDelete(req.params.id, {new:true})
        if(!product){
           res.send('not founddd')
        }
        else{
           return res.send('deleteddd')
        }
    }
    catch{
        return res.send('errrrrr')
    }
})

   module.exports=router

