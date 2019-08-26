const express=require('express')
const route=express.Router()
const Sequelize=require('sequelize')
const Items=require('../models/tablesCreater').Items

// sequelize=new Sequelize({
//     dialect:'sqlite',
//     storage:'./databases/tables.sqlite'
// })

// const Items=sequelize.define('items',{
//     id:{
//         type:Sequelize.INTEGER,
//         primaryKey:true,
//         autoIncrement:true,
//     },
//     imgurl:{
//         type:Sequelize.STRING,
//     },
//     title:{
//         type:Sequelize.STRING,
//     },
//     subtitle:{
//         type:Sequelize.STRING,
//     },
//     description:{
//         type:Sequelize.STRING,
//     },
//     updatedAt:{
//         type:Sequelize.STRING,
//         defaultValue:"Last updated 3 mins ago"
//     }
// })


// Items.sync({force:true}).then(() => {
//     Items.bulkCreate([
//         {
//             imgurl:'/shoesale.webp',
//             title:"Nike Women's Shoes",
//             subtitle:"Rs. 7,000",
//             description:"Nike's premier running and jogging shoes for women",
//         },
//         {
//             imgurl:'/watchsale.jpg',
//             title:"Apple Smart Watch",
//             subtitle:"Rs. 50,000",
//             description:"Latest edition Appple smart watch, Model No.45XXW87.",
        
//         },
//         {
//             imgurl:'/earringssale.jpg',
//             title:"Jewels blue and gold Earrings",
//             subtitle:"Rs.300",
//             description:"Women's earrings by Jewels pvt. ltd.",
        
//         },
//         {
//             imgurl:'/bagsale.png',
//             title:"Da Milano Women's Handbag",
//             subtitle:"Rs. 9,000",
//             description:"Da Milano",
        
//         },
//         {
//             imgurl:'/valletsale.jpg',
//             title:"Da Milano Men's Wallet",
//             subtitle:"Rs.4,000",
//             description:"Da Milano",
        
//         },
//         {
//             imgurl:'/kurtasale.jpg',
//             title:"Women's Kurta",
//             subtitle:"Rs.1,999",
//             description:"Biba Women's Kurta",
        
//         }
    
//     ]).then(()=>console.log('written'))
    
// })


route.get('/shopnow',(req,res)=>{
    
    if(req.user===undefined){
        res.redirect('/login')
    }
    else{
        console.log("WELCOME "+req.user.username)
    // Items.getAll=function(){
        Items.findAll().then(function (users){
            let arr=users.map(u => u.get({plain: true}))
            //console.log(arr)
            res.render('shopping-final',{arr})
            //res.sendStatus(200)
        });
    // }
    }

})


// sequelize.authenticate().then(()=>{
//     console.log('Connected to products db')
// })

module.exports=route