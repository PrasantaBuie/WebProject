//read hbs and js file 'node src/app.js -e js,hbs'
const express = require('express');
const path=require('path')
const hbs=require('hbs')
const app=express();
const port=process.env.PORT || 8000;


const spath=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)
app.use(express.static(spath))

app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("error",{
        errMsg:"Oops! Page Not Found "
    });
})
app.listen(port,()=>{
    console.log(`server running at port no ${port}`)
});