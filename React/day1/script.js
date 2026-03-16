const savedTheme = localStorage.getItem("theme");

if (savedTheme){
    document.body.className = savedTheme;
}

function setTheme(mode){
    document.body.className = mode;
    localStorage.setItem("x",mode);
}