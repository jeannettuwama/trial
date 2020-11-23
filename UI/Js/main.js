function toggle(){
    let hamburger = document.getElementById(`nav_link`);
    

    if(hamburger.style.display === "inline"){
        hamburger.style.display = "none";
    }else{
        hamburger.style.display = "inline";
    }
}
document.getElementById("humbut").addEventListener("click", toggle);