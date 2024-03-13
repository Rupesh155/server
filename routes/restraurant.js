const express = require('express');
const router = express.Router();
 let Restraurant=     require('../models/restraurant')
//  create api for restraurant
 router.post('/restro', async (req,res)=>{
    console.log(req.body,"rrrr");
        try{   
              let restraurant=   new Restraurant(req.body)
               await  restraurant.save()
            return   res.status(201).send(restraurant)
        }
        catch(err){
            console.log(err,   'errrr');
           return  res.status(402).send('err')

        }

 })
//   get all Restraurant 
 router.get('/restro',  async (req,res)=>{  

    try{
        let restraurant=  await Restraurant.find()
        if(!restraurant){

         return  res.send('restraurant not foundddd')
          
        }
        else{
            res.send(restraurant)
        }

    }
    catch{

    }

 })


 router.get('/restro/:id',  async (req,res)=>{
     try{
        let restraurant=    await   Restraurant.findById(req.params.id)
        if(!restraurant){
           return res.status(404).send('not founddddd')

        }
        else{
            return res.send(restraurant)
        }

     }
     catch{
        res.send('err')
     }
         
 })

 
//  update restraurant
router.patch('/restro/:id',   async(req,res)=>{
    try{
        let restraurant=      await Restraurant.findByIdAndUpdate(req.params.id, req.body, {new:true})
         if(restraurant){
            res.send(restraurant)
         }
         else{
            return res.send('not foundddddd not updateddddd')
         }
    }
    catch (err){
        console.log('errr' ,  err);
    }      

} )



router.delete('/restro/:id', async(req,res)=>{

    try{
        let restraurant=   await  Restraurant.findByIdAndDelete(req.params.id, {new:true})
        if(!restraurant){
           res.send('not founddd')
        }
        else{
          return res.send('deleteddd')
        }

    }
    catch{
       return  res.send('errrrrr')
    }

       

})



 module.exports=router