const para=document.querySelectorAll("p");
//const para = document.getElementbyTagName("p");

/*for(let i=0; i<para.length; i++){
    //para[i].style.color="blue";
    para[i].style.fontSize="40px";

    if (i % 2 === 0) {
        
        para[i].style.color = "red";
    } else {
    
        para[i].style.color = "cornflowerblue";
    }

    para[para.length-1].style.fontWeight="bold"
    //para[5].style.fontWeight="bold"

}*/

    para.forEach((para, index) => {
    if (index % 2 === 0) {
        para.style.color = "cyan";
    } else {
        para.style.color = "yellow";
    }
});


//textcontent
//innertext
//innerhtml

//const demo=document.getElementById("demo");
//console.log(demo.textContent);
//demo.textContent="this is a new para."
//demo.innerHTML="<b>This is new bold para</b>"

//create an element and append
const newpara = document.createElement("p");
newpara.textContent="This is the new para";
console.log(newpara);

document.getElementById("content").append(newpara);


//creat img tag
const image=document.createElement("img");
image.setAttribute("src","https://images.unsplash.com/photo-1768560515104-9c9107c2b6b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D")

image.setAttribute("alt","Quiet");
doxument.getElementById("gallery").append(image);


//
let date = new Date()
console.log(date);


