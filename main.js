// generate dummy data in this format in a collection called employees in a db called company.

// {
  // name:"Harry",
  // salary:345,
  // language:"Python",
  // city:"New York",
  // isManager:true

// }
// Generate 10 such records when a button is clicked
// create an express app with mongoose to achieve it
// Everytime the button is clicked you should clear the collection
import mongoose from "mongoose";
import express from "express";
import { EmpDetails } from "./models/EmpDetails.js";

let connection=mongoose.connect("mongodb://127.0.0.1:27017/company")

const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', async(req, res) => {
  // res.sendFile(__dirname+'/index.html');
  res.send('Hello World!')
})

app.post('/clicked', async(req, res) => {
  let nameArr=["Harry","Muskan","Nimit"];
  let languageArr=["Python","Java","C"];
  let cityArr=["Delhi","Padrauna","Mumbai"];
  let isManager=0;
  const Employee = new EmpDetails({

    name:nameArr[Math.floor(Math.random()*3)],

    salary:345+(1000-345)*(Math.random()),

    language:languageArr[Math.floor(Math.random()*3)],

    city:cityArr[Math.floor(Math.random()*3)],

    isManager:!isManager,
  });
  await Employee.save();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
