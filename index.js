let openDropdown = document.querySelector(".open")
let closeDropdown = document.querySelector(".close")
let ul = document.querySelector("ul")

function openD(){
    ul.style.marginTop = "0px"
    openDropdown.style.display = "none"
    closeDropdown.style.display = "block"
}
function closeD(){
    ul.style.marginTop = "-250px"
    openDropdown.style.display = "block"
    closeDropdown.style.display = "none"
}

openDropdown.addEventListener("click",openD )
closeDropdown.addEventListener("click",closeD )
