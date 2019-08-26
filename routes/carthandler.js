const route=require('express').Router()
const Users=require('../models/tablesCreater').Users
const Items=require('../models/tablesCreater').Items
const UsersCart=require('../models/cart')

route.get('/mycart',(req,res)=>{
    if(req.user===undefined){
        res.redirect('/login')
    }
    else{
        UsersCart.findAll({
            where:{
                userId:req.user.id
            },
            include:[{
                model:Users
            }]
        }).then(function(items){
            let arr= items.map(x=>x.get({plain:true}))
                        // .map(item=>item.item_id)
                        // .map((itemid)=>{
                        //     return Items.findOne({where:{id:itemid}})
                        // })
            //return Promise.all(arr)
            console.log(arr)
            })
        // }).then(array=>{
        //     array=array.map(x=>x.get({plain:true}))
        //     console.log(array)
        //     res.render('mycart',{array})
        // })
    }
    //res.send('Cart is up and running from route')
})

route.get('/addtocart/:id',(req,res)=>{
    if(req.user===undefined){
        res.redirect('/login')
    }
    const relid=req.params.id
    //const user=req.user
    // Users.findOne({
    //     where:{
    //         id:req.user.id
    //     }
    // }).then(reluser=>{
    //     UsersCart.create
    // })
    Items.findOne({
        where:{
            id:relid
        }
    }).then(relitem=>{
        Users.addItems(item)
        // UsersCart.create({
        //     userId:req.user.id,
        //     //item_id:parseInt(relid,10),
        //     itemId:relitem.id,
        //     quantity:1,
        //     amount:relitem.price,
        // })
    }).then(()=>{
        res.redirect('/shopnow')
    })



})

route.get('/removefromcart/:itemid',(req,res)=>{
    UsersCart.destroy({
        where:{
            user_id:req.user.id,
            item_id:parseInt(itemid,10)
        }
    }).then(deleteditem=>{
        res.redirect('/mycart')
    })
})


module.exports=route