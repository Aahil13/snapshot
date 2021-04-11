let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {
        //toggle nav 
        nav.classList.toggle('nav-active');
    })
}

navSlide();