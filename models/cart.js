const Sequelize=require('sequelize')
const Users=require('./tablesCreater').Users
const Items=require('./tablesCreater').Items
// const Users=require('./users')
// const Items=require('./items')

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/tables.sqlite'
})

const UsersCart=sequelize.define('UsersCart',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    // user_id:{
    //     type:Sequelize.INTEGER,
    //     references:{
    //         model:'Users',
    //         value:'id',
    //     }
    // },
    // item_id:{
    //     type:Sequelize.INTEGER,
    //     references:{
    //         model:'Items',
    //         value:'id',
    //     },
    //     allowNull:true,
    // },
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1,
    },
    amount:{
        type:Sequelize.INTEGER,
        defaultValue:0,
    }
})

// Users.hasMany(Items)
// Items.hasMany(Users)


    Users.belongsToMany(Items,{
        through:UsersCart,
        //as:'Items',
        //foreignKey:'id',
        //constraints:false,
    })



    Items.belongsToMany(Users,{
        through:UsersCart,
        //as:'Users',
        //foreignKey:'id',
        //constraints:false,
    })
    

UsersCart.sync({force:true}).then(()=>{
    console.log('Synced to mycart')
})

sequelize.authenticate().then(()=>{
    console.log('Connected to cart table')
}).catch(err=>{
    console.log(err)
})

// module.exports={
//     UsersCart,
//     function (table){
//         return table.sync({force:true})
//     },
//     sequelize
// }

module.exports=UsersCart