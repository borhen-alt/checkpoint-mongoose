const express = require ('express')
const mongoose = require ('mongoose')
const Person = require ('./models/Person')
const app = express ()

//Connect to the database 
const conncetDB = async () => {
    try {
        await mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology:true})
        consile.log(connected)         
    }
    catch (err){
     console.log(err)
    }
}
//create and save a record of a modal 
const person = new Person({
    name: "wajdy",
     age: 30,
      favoriteFoods: ["poulet grillé", "fruit de mer"]
    });
    person.save(function(err, person) {
        if (err) {
         console.log(err)
        }
        else{
        console.log(person)
    }
      });
    //create many records with model.create()
    let arrayOfPeople = [
        {name:"sami",age:30,favoriteFoods:['Pizza','chicken wings','Pasta'],_id:1},
        {name:"hamza",age:22,favoriteFoods:['Spagetti','Salade','Bannana'],_id:2},
        {name:"Moataz",age:19,favoriteFoods:['kouskous','juice','apple'],_id:3},
    ];
const createManyPerson = function (arrayOfPeople,done){
    Person.create(arrayOfPeople,(error,createdPeople)=>{
        if(error){
            console.log(error)
        }
        else {
            console.log ("succesfull")
        }
    }
    )
}
// Use model.find() to Search Your Database
const person = Person.find({name:'wajdy'},(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
}
)
//Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = Person.findOne({
    favoriteFoods:{
        $all:["Pizza"]
    }
});
//Use model.findById() to Search Your Database By _id
const personId= Person.findById ({
    _id:2,
    
});
//Perform Classic Updates by Running Find, Edit, then Save
let findEditThenSave= function(personId,done){
    let foodToAdd = "humburger";
    Person.findById(personId,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            result.favoriteFoods.push(foodToAdd)
            result.save((error,updatedResult)=>{
                if(error){
                    console.log(error)
                }else{
                    done(null,apdatedRecord)
                }
            })
        }
    })
}
//Perform New Updates on a Document Using model.findOneAndUpdate()
let findAndUpdate = function(personName, done) {
    let ageToset = 20;
Person.findOneAndUpdate ({name: personName}, {age: ageToset}, {new: true}, (error, updatedRecord) => {
if(error) {
    console.log(error)
}else{
    done(null, updatedRecord);
}


});

//Delete One Document Using model.findByIdAndRemove
let removeById = function (personId, done) {
    Person.finByIdAndRemove(personId, (error, deletedRecord) => {
        if(error){
            console.log(error)
        }else{
            done(null, deletedRecord)
        }
})

//MongoDB and Mongoose - Delete Many Documents with model.remove()
let removeManyPeople = function (done) {
    let nameToRemove = "Mary";
    Person.remove({name: nameToRemove}, (error, JSONStatus) => {
        if(error){
            console.log(error)
        }else{
            done(null,JSONStatus)
        }
    })
};

//Chain Search Query Helpers to Narrow Search Results
let queryChain = function(done) {
    let foodToSearch = "burrito";
    Person.find({favoriteFoods : {$all: [foodToSearch]}})
    .sort({name:1})
    .limit(2)
    .select({ age: 20 })
    console.log(Person);

}