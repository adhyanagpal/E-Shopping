const route=require('express').Router()
const passport=require('../passport')
const Sequelize=require('sequelize')
const session=require('express-session')
const Users=require('../models/tablesCreater').Users
const UsersCart=require('../models/cart')
// const sequelize=new Sequelize({
//     dialect:'sqlite',
//     storage:'./databases/testdb.sqlite'
// });

// const Users=sequelize.define('users',{
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey:true,
//     },

//     username:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },

//     password:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },

//     firstname:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },

//     lastname:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },

// })



route.use(session({
    secret: 'nobody can guess',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

route.use(passport.initialize())
route.use(passport.session())

route.get('/login',(req,res)=>{
    res.render('loginPage')
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})

// route.post('/login',(req,res)=>{
//     Users.findOne({
//         where:{
//             username:req.body.username
//         }
//     })
//         .then(reluser=>{
//             if(reluser==null){
//                 res.redirect('/signup')
//             }
//             else if(reluser.password!==req.body.password){
//                 res.redirect('/login')
//             }
//             else{
//                 //res.send('Welcome '+reluser.firstname)
//                 res.redirect('/shopnow')
//             }
//         })
// })

route.post('/login',function (req,res,next){
    passport.authenticate('local',function (err,user,info){
        console.log(info.message)
        if(!user){
            if(info.message=='NoSuchUser'){
                res.redirect('/signup')
            }
            if(info.message=='WrongPassword'){
                res.redirect('/login')
            }
        }
        else{
            // res.redirect('/shopnow')
            req.logIn(user,(err)=>{
                if(err){
                    return console.log(err)
                }
                else{
                    // UsersCart.create({
                    //     user_id:req.user.id
                    // })
                    res.redirect('/shopnow')
                }
            })
        }
    })(req,res,next)
})

// route.post('/login',
//     passport.authenticate('local',  
//     {
//         failureRedirect:'/login',
//         successRedirect:'/shopnow',
//         successFlash:'Welcome ',
//         failureFlash:true,
//     })
// ) 

route.post('/signup',(req,res)=>{
    Users.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })
    .then(newuser=>{
        res.redirect('/login')
    })
})

//Users.sync({force:true})

// sequelize.authenticate().then(()=>{
//     console.log('connected')
// }).catch(err=>{
//     console.log(err)
// })

module.exports={
    Users,
    //sequelize,
    route
}