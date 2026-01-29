let user={
    fullname : "hs",
    address : {
        city : "delhi",
        state : "delhi"
    },
    mobno : 234567,
    favcolor : ["blue","red","green"],
    demo:function(){
        return "demo function";
    }

}
/*console.log(user.fullname,user.address.city,user.mobno,user.favcolor[1],user.demo());*/

/*console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))*/


//OBJECT FREEZER
const car = {
    make : "mahindra",
    model : "blah",
};
Object.freeze(car);
//Object.seal(car);
car.model="098ui";

car.color = "blue";
console.log(car);

//diff bw seal and feeze

//seal : we cant add a new key and val pair but we can change or update existing values
//freeze : we cant add a new key and val pair and also we cant change or update existing values