const mongoose = require('mongoose')
const Person = new mongoose.Schema({
 name: {
     type:String,
required:true
 },
 age: {
     type:Number,
    
 },
favoriteFoods:{
type:[String]
},
 _id :{
     type:Number,
     required:true,
     unique:true,
 },
});
module.exports = mongoose.model('Person', personSchema,)