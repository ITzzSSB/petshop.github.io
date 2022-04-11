let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active'); 
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
    searchForm.classList.remove('active'); 
}
let searchForm = document.querySelector('.header .search-form');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.toggle('active');    
    loginForm.classList.remove('active');
    searchForm.classList.remove('active'); 
}
window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active'); 

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}