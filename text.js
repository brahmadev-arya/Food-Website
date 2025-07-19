const menuBTN = document.getElementById("menu_btn");

const navlinks = document.getElementById("nav_links");
const menuBTNIcon = menuBTN.querySelector("i");

menuBTN.addEventListener("click" , (e) =>{

    navlinks.classList.toggle("open");

    const isOpen= navlinks.classList.contains("open");

    menuBTNIcon.setAttribute("class" ,isOpen ? "ri-close-line" : "ri-menu-line");
});


navlinks.addEventListener("click",(e)=>{
    navlinks.classList.remove("open");
    menuBTNIcon.setAttribute("class","ri-menu-line");
});


const scrollRevealoption ={
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealoption,
    origin: "right", 
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealoption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealoption,
    delay:1000,
});
ScrollReveal().reveal(".order_card",{
    ...scrollRevealoption,
    interval: 500,
});
ScrollReveal().reveal(".event_content",{
    duration: 1000,
});
document.getElementById('menu_btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav_links');
    navLinks.classList.toggle('open');
});
