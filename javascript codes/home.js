var navSlide= () =>{
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active'); //togle nav//
        navLinks.forEach((link, index) =>{
            if(link.style.animation) { //animation link//
                link.style.animation="";}
            else {
                link.style.animation=`navLinkFade 0.5s ease forwards
                 ${index / 7+ 0.3}s`;
            };
            })
        })
    }
navSlide();