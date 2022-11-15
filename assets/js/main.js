/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle) {
	navToggle.addEventListener("click", () => {
			navMenu.classList.add("show_menu")
	})
}

/* MENU HIDDEN */
if(navToggle) {
	navClose.addEventListener("click", () => {		
		navMenu.classList.remove("show_menu")
	}) 
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	//when we click on each nav_link, we remove the show-menu close
	navMenu.classList.remove('show_menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* About Tabs */
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('about_active')
        })

        target.classList.add('about_active')

        tabs.forEach(tab => {
            tab.classList.remove('about_active')
        })

        tab.classList.add('about_active')
    })
})

/*--- Load More --*/
const loadmore = document.querySelector('#loadmore')

let currentItems = 9;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.portfolio .project_card')];
    for(let i=currentItems; i<currentItems + 9; i++){
        if(elementList[i]){
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 9;
    if(currentItems >= elementList.length){
        event.target.style.display = 'none';
    }
})

/* Scroll Progress */
var scrollProgress = document.getElementById("progress")

let calcScrollValue = () => {
    let pos = document.body.scrollTop || document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percentValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.style.background = `conic-gradient(#e9a600 ${percentValue}%, #d7d7d7 ${percentValue}%)`;
};

scrollProgress.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});