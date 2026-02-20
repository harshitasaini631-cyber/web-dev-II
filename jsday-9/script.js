//callback hell
// Login("john@example.com", "password123", (data) => {
//     console.log(data);

// getVideoList((videos) => {
//     console.log(videos);
//     getVideoDetails(videos.videos[0], (videodetails) => {
//         console.log(videodetails);
//      });
//   });
// });
// console.log("ending script.js");


//overrding callback hell
//promise constructor by using which we create the promise

let myPromise = new Promise((res,rej)=>{
    let data = "this is my data getting from somewhere";
    //let data = "";

    if(data){
        res(data);
    }else{
        rej("data not found");
    }
    
});
console.log(myPromise);
