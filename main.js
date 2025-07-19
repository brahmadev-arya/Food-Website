// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign-up successful! Welcome to 0Hunger.");
    closeModal('signupModal');
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful! Enjoy your meals.");
    closeModal('loginModal');
});
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