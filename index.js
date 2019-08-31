const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

hbs.registerPartials(path.join(__dirname,'/partials'))

app.use(express.static(__dirname+'/public'))

const entryroute=require('./routes/entry.js')
const itemsroute=require('./routes/products.js')
const cartroute=require('./routes/carthandler.js')
const exitroute=require('./routes/exit.js')
const paymentroute=require('./routes/payment.js')

app.use(entryroute.route)
app.use(itemsroute)
app.use(cartroute)
app.use(exitroute)
app.use(paymentroute)

app.get('/',(req,res)=>{
    res.render('index',{currentUser:req.user})
})

app.get('/about',(req,res)=>{
    res.render('about',{currentUser:req.user})
})

// app.get('/shopnow',(req,res)=>{
//     res.render('shopping')
// })

// app.get('/mycart',(req,res)=>{
//     res.render('mycart')
// })

app.listen(3333)