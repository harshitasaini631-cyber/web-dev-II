console.log("startingapp.js");
function myWork(){
    setTimeout(()=>{
       console.log("my work is being called");
    },8000)
    
}
myWork((data)=>{ //callback
    console.log(data);
});
console.log("ending app .js")

setTimeout(()=>{
    console.log("helloworld")

},2000)

//setTimeout default behaviour => unsynchronous    

//login
function Login(email,pass,cb){
    setTimeout(()=>{
       cb({userName:email,isLoggedIn:true,message:"login successfuull"});
    },3000)
}    

Login("user@gmail","1234pass",(data)=>{
    console.log(data);
})