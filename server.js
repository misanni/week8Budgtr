const { response } = require("express");
const express = require("express");
const budget= require("./models/budget.js");
const app=express();
app.use(express.urlencoded({ extended:false }));
//const account=0;
//const transaction=0
app.get('/budgets', (request, response)=>{
    response.render("index.ejs", {
        allbudget:budget,
        //bankAccount:account
    });
});
// date  name  from  amount tag
 app.get('/budgets/:index', (request, response)=>{
  response.render("show.ejs", {budgetdate :budget[request.params.index].date, budgetname :budget[request.params.index].name, budgetfrom :budget[request.params.index].from, budgetamount :budget[request.params.index].amount, budgettag :budget[request.params.index].tags,})
 });
 app.get('/budget/new', (request, response)=>{
    response.render("new.ejs");
 });


app.post('/budgets', (request, response)=>{
    console.log(request.body);
    budget.push(request.body);

response.redirect("/budgets");
});


app.listen(3000,()=>{
    console.log("server is listening to port...")
});

