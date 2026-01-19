//types of function


//regular function

/*function sample (a){
    console.log(a,"sample");
}
sample(5)*/

//arrow function
/*const sample=()=>console.log("sample") 
sample()*/

//callback function
function sample(callback){
    console.log("sample");
    callback();
}
function demo(){
    console.log("demo");
}
sample(demo);