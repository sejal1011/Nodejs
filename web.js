const express=require('express')
const app=express()
app.get('',(req,res)=>{
res.send([
    {
        name:'sejal'
    },
    {
        name:'Sarah'
    }
])
})
app.get('/help',(req,res)=>{
    res.send('help page')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/weather',(req,res)=>{
    res.send('Your Weather')
})
app.listen(3000,()=>{
    console.log('Server is on port 3000')
})
