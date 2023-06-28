let navbtn = document.getElementById("navbtn")
let navbar = document.querySelector('.navbar')
let toggle = false

navbtn.addEventListener('click', () => {
    if(toggle){
        navbar.style.opacity = '0'
        navbtn.style.opacity = '0.8'
        toggle = false
    }
    else{
        navbar.style.opacity = '1'
        navbtn.style.opacity = '1'
        toggle = true
    }
})