const Sequelize=require('sequelize')
const Users=require('./tablesCreater').Users

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/tables.sqlite'
})

const Items=sequelize.define('items',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    imgurl:{
        type:Sequelize.STRING,
    },
    title:{
        type:Sequelize.STRING,
    },
    price:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.STRING,
    },
    updatedAt:{
        type:Sequelize.STRING,
        defaultValue:"Last updated 3 mins ago"
    }
})


// Items.sync({force:true}).then(() => {
//     Items.bulkCreate([
//         {
//             imgurl:'/shoesale.webp',
//             title:"Nike Women's Shoes",
//             price:7000,
//             description:"Nike's premier running and jogging shoes for women",
//         },
//         {
//             imgurl:'/watchsale.jpg',
//             title:"Apple Smart Watch",
//             price:50000,
//             description:"Latest edition Appple smart watch, Model No.45XXW87.",
        
//         },
//         {
//             imgurl:'/earringssale.jpg',
//             title:"Jewels blue and gold Earrings",
//             price:300,
//             description:"Women's earrings by Jewels pvt. ltd.",
        
//         },
//         {
//             imgurl:'/bagsale.png',
//             title:"Da Milano Women's Handbag",
//             price:9000,
//             description:"Da Milano",
        
//         },
//         {
//             imgurl:'/valletsale.jpg',
//             title:"Da Milano Men's Wallet",
//             price:4000,
//             description:"Da Milano",
        
//         },
//         {
//             imgurl:'/kurtasale.jpg',
//             title:"Women's Kurta",
//             price:1999,
//             description:"Biba Women's Kurta",
        
//         }
    
//     ]).then(()=>console.log('written'))
    
// })

// sequelize.authenticate().then(()=>{
//     console.log('connected')
// }).catch(err=>{
//     console.log(err)
// })

module.exports={
    Items,
    sequelize,
    function(table){
        return table.sync({force:true})
    }
}

//module.exports=Items