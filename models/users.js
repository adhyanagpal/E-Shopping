const Sequelize=require('sequelize')
const Items=require('./tablesCreater').Items

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/tables.sqlite'
})

const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    firstname:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    lastname:{
        type:Sequelize.STRING,
        allowNull:false,
    },

})



// Users.sync({force:true}).then(()=>{
//     console.log('Synced to Users')
// })

// sequelize.authenticate().then(()=>{
//     console.log('Connected')
// }).catch(err=>{
//     console.log(err)
// })

module.exports={
    Users,
    function (table){
        return table.sync({force:true})
    },
    sequelize
}

//module.exports=Users