const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color="tomato"
heading.style.backgroundColor="blue"
heading.textContent="Bye"

const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i=0; i<subHeading.length; i++){
    subHeading[i].style.color="orange";
    subHeading[1].style.color="cyan";
    
}


const content = document.querySelector("#content p");
//const content = document.querySelectorAll("#content p");
console.log(content)

content.style.fontSize="40px"