const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');



if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
};
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
};

// remove menu mobile
for(let i=0;i<document.querySelectorAll('.nav__link').length ; i++){
    document.querySelectorAll('.nav__link')[i].addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        console.log("hello");
    })
}


// SKills up and down arrow
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.getElementsByClassName('skills__header');


function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close')
    this.parentNode.className ='skills__content skills__open' ;

    
    
}

for(i=0;i<skillsHeader.length;i++){
    skillsHeader[i].addEventListener('click', toggleSkills);
}




// ====================Qualification Tabs+++++++++++++++++++++++++
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        for(i=0;i<tabContents.length;i++){
            tabContents[i].classList.remove('qualification__active');
    }
        target.classList.add('qualification__active');
       for(i=0;i<tab.length;i++){
        tab[i].classList.remove('qualification_active');
       }
        tab.classList.add('qualification__active');
    })
   

})

// ============Portfolio==========================
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });






// ===============DARK LIGHT THEME====================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'uil-moon' : 'uil-sun'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add':'remove'](iconTheme)

}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme' , getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());

})









