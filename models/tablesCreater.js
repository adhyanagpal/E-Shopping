const Users=require('./users').Users
const syncfunc=require('./users').function
const sequelize=require('./users').sequelize

const Items=require('./items').Items
const syncfuncItems=require('./items').function
const sequelizeItems=require('./items').sequelize

// const UsersCart=require('./cart').UsersCart
// const syncfuncCart=require('./cart').function
// const sequelizeCart=require('./cart').sequelize

// syncfunc(Users).then(()=>console.log('Synced to Users'))
//     .then(()=>{
//         syncfuncItems(Items)
//     }).then(()=>console.log('Synced to Items'))
//     .then(() => {
//         Items.bulkCreate([
//             {
//                 imgurl:'/shoesale.webp',
//                 title:"Nike Women's Shoes",
//                 price:7000,
//                 description:"Nike's premier running and jogging shoes for women",
//             },
//             {
//                 imgurl:'/watchsale.jpg',
//                 title:"Apple Smart Watch",
//                 price:50000,
//                 description:"Latest edition Appple smart watch, Model No.45XXW87.",
            
//             },
//             {
//                 imgurl:'/earringssale.jpg',
//                 title:"Jewels blue and gold Earrings",
//                 price:300,
//                 description:"Women's earrings by Jewels pvt. ltd.",
            
//             },
//             {
//                 imgurl:'/bagsale.png',
//                 title:"Da Milano Women's Handbag",
//                 price:9000,
//                 description:"Da Milano",
            
//             },
//             {
//                 imgurl:'/valletsale.jpg',
//                 title:"Da Milano Men's Wallet",
//                 price:4000,
//                 description:"Da Milano",
            
//             },
//             {
//                 imgurl:'/kurtasale.jpg',
//                 title:"Women's Kurta",
//                 price:1999,
//                 description:"Biba Women's Kurta",
            
//             }
        
//         ]).then(()=>console.log('written'))
        
//     })
//     .then(()=>{
//         syncfuncCart(UsersCart)
//     })
//     .then(()=>console.log('Synced to cart'))  

syncfunc(Users).then(()=>{
    console.log('Synced to Users')
    syncfuncItems(Items).then(()=>{
        console.log('Synced to Items')
        Items.bulkCreate([
            {
                imgurl:'/shoesale.webp',
                title:"Nike Women's Shoes",
                price:7000,
                description:"Nike's premier running and jogging shoes for women",
            },
            {
                imgurl:'/watchsale.jpg',
                title:"Apple Smart Watch",
                price:50000,
                description:"Latest edition Appple smart watch, Model No.45XXW87.",
            
            },
            {
                imgurl:'/earringssale.jpg',
                title:"Jewels blue and gold Earrings",
                price:300,
                description:"Women's earrings by Jewels pvt. ltd.",
            
            },
            {
                imgurl:'/bagsale.png',
                title:"Da Milano Women's Handbag",
                price:9000,
                description:"Da Milano",
            
            },
            {
                imgurl:'/valletsale.jpg',
                title:"Da Milano Men's Wallet",
                price:4000,
                description:"Da Milano",
            
            },
            {
                imgurl:'/kurtasale.jpg',
                title:"Women's Kurta",
                price:1999,
                description:"Biba Women's Kurta",
            
            }
        
        ])
        // .then(()=>{
        //     console.log('written')
        //     syncfuncCart(UsersCart).then(()=>console.log('Synced to Cart'))
        // })
        
    })
})


sequelizeItems.authenticate().then(()=>{
    console.log('Connected to Items')
})

sequelize.authenticate().then(()=>{
    console.log('Connected to Users')
})

// sequelizeCart.authenticate().then(()=>{
//     console.log('Connected to Cart')
// })


module.exports={
    Users,
    Items,
    //UsersCart
}